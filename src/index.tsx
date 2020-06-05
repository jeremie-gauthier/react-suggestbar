import * as React from "react";
import * as PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import "./styles.scss";
import Suggestions from "./suggestions";

const { useState, useRef, useEffect } = React;

export type ISuggestBarProps = {
	inputValue: any;
	inputType?: string;
	inputPlaceholder?: string;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onInputSubmit: VoidFunction;

	submitBtn?: React.ReactNode;

	suggestData: string[];
	onSuggestClick: (suggestion: string) => void;

	containerClassName?: string;
	inputClassName?: string;
	submitBtnClassName?: string;
	suggestContainerClassName?: string;
	suggestClassName?: string;
};

const SuggestBar: React.FC<ISuggestBarProps> = ({
	inputValue,
	inputType,
	inputPlaceholder,
	onInputChange,
	onInputSubmit,
	submitBtn,
	suggestData,
	onSuggestClick,
	containerClassName,
	inputClassName,
	submitBtnClassName,
	suggestContainerClassName,
	suggestClassName,
}) => {
	const [suggestShow, setSuggestShow] = useState(false);

	const nodeSearchGroup = useRef(null);
	useEffect(() => {
		const domNode = ReactDOM.findDOMNode(nodeSearchGroup.current);

		function handler(evt: any) {
			if (!domNode?.contains(evt.target)) {
				setSuggestShow(false);
			}
		}

		document.addEventListener("mousedown", handler);
		document.addEventListener("keydown", handler);
		document.addEventListener("keyup", handler);

		return function cleanup() {
			window.removeEventListener("mousedown", handler);
			window.removeEventListener("keydown", handler);
			window.removeEventListener("keyup", handler);
		};
	}, []);

	function handleInputChange(evt: any) {
		onInputChange(evt);
		if (evt.target.value.length > 0) {
			setSuggestShow(true);
		} else {
			setSuggestShow(false);
		}
	}

	function handleInputSubmit() {
		onInputSubmit();
		setSuggestShow(false);
	}

	function handleInputFocus() {
		if (inputValue.length > 0 && suggestData.length > 0) {
			setSuggestShow(true);
		}
	}

	function handleSuggestClick(suggestion: string) {
		onSuggestClick(suggestion);
		setSuggestShow(false);
	}

	function handleKeyPress(key: string) {
		if (key === "Enter") {
			onInputSubmit();
		}
	}

	return (
		<div
			ref={nodeSearchGroup}
			className={["searchGroup", containerClassName].join(" ")}
		>
			<input
				className={["searchBar", inputClassName].join(" ")}
				type={inputType}
				value={inputValue}
				placeholder={inputPlaceholder}
				onChange={(e) => handleInputChange(e)}
				onFocus={handleInputFocus}
				onSubmit={handleInputSubmit}
				onKeyPress={({ key }) => handleKeyPress(key)}
			/>

			{suggestShow ? (
				<Suggestions
					onSuggestClick={(suggestion: string) =>
						handleSuggestClick(suggestion)
					}
					suggestData={suggestData}
					suggestContainerClassName={suggestContainerClassName}
					suggestClassName={suggestClassName}
				/>
			) : null}

			<button
				className={["searchBtn", submitBtnClassName].join(" ")}
				onClick={handleInputSubmit}
			>
				{submitBtn}
			</button>
		</div>
	);
};

SuggestBar.defaultProps = {
	inputType: "text",
	inputPlaceholder: "",
	submitBtn: "Ok",
};

SuggestBar.propTypes = {
	inputValue: PropTypes.any,
	inputType: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	onInputSubmit: PropTypes.func.isRequired,

	submitBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

	suggestData: PropTypes.array.isRequired,
	onSuggestClick: PropTypes.func.isRequired,

	containerClassName: PropTypes.string,
	inputClassName: PropTypes.string,
	submitBtnClassName: PropTypes.string,
	suggestContainerClassName: PropTypes.string,
	suggestClassName: PropTypes.string,
};

export default SuggestBar;

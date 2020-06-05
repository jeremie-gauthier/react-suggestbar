import * as React from "react";
import * as PropTypes from "prop-types";
import "./styles.scss";
import Suggestions from "./suggestions";

const { useState } = React;

export type ISuggestBarProps = {
	inputType?: string;
	inputPlaceholder?: string;
	onInputChange: VoidFunction;
	onInputSubmit: VoidFunction;

	submitBtn?: React.ReactNode;

	suggestData: string[];
	suggestShow: boolean;
	onSuggestClick: (suggestion: string) => void;

	containerClassName?: string;
	inputClassName?: string;
	submitBtnClassName?: string;
	suggestContainerClassName?: string;
	suggestClassName?: string;
};

const SuggestBar: React.FC<ISuggestBarProps> = ({
	inputType,
	inputPlaceholder,
	onInputChange,
	onInputSubmit,
	submitBtn,
	suggestData,
	suggestShow,
	onSuggestClick,
	containerClassName,
	inputClassName,
	submitBtnClassName,
	suggestContainerClassName,
	suggestClassName,
}) => {
	const [hasFocus, setHasFocus] = useState(false);

	return (
		<div className={["searchGroup", containerClassName].join(" ")}>
			<input
				className={["searchBar", inputClassName].join(" ")}
				type={inputType}
				placeholder={inputPlaceholder}
				onChange={onInputChange}
				onSubmit={onInputSubmit}
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
			/>
			<button
				className={["searchBtn", submitBtnClassName].join(" ")}
				onClick={onInputSubmit}
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
			>
				{submitBtn}
			</button>
			{suggestShow && hasFocus ? (
				<Suggestions
					onSuggestClick={onSuggestClick}
					suggestData={suggestData}
					suggestContainerClassName={suggestContainerClassName}
					suggestClassName={suggestClassName}
				/>
			) : null}
		</div>
	);
};

SuggestBar.defaultProps = {
	inputType: "text",
	inputPlaceholder: "",
	submitBtn: "Ok",
};

SuggestBar.propTypes = {
	inputType: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	onInputSubmit: PropTypes.func.isRequired,

	submitBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

	suggestData: PropTypes.array.isRequired,
	suggestShow: PropTypes.bool.isRequired,
	onSuggestClick: PropTypes.func.isRequired,

	containerClassName: PropTypes.string,
	inputClassName: PropTypes.string,
	submitBtnClassName: PropTypes.string,
	suggestContainerClassName: PropTypes.string,
	suggestClassName: PropTypes.string,
};

export default SuggestBar;

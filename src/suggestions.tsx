import * as React from "react";
import "./styles.scss";

export type ISuggestionsProps = {
	onSuggestClick: (suggestion: string) => void;
	suggestData: string[];
	suggestContainerClassName?: string;
	suggestClassName?: string;
};

function Suggestions({
	onSuggestClick,
	suggestData,
	suggestContainerClassName,
	suggestClassName,
}: ISuggestionsProps) {
	function renderSuggestions() {
		return suggestData.map((suggestion: string, index: number) => (
			<div
				key={index}
				className={["suggestion", suggestClassName].join(" ")}
				onClick={() => onSuggestClick(suggestion)}
			>
				{suggestion}
			</div>
		));
	}

	return (
		<div className={["listSuggestions", suggestContainerClassName].join(" ")}>
			{renderSuggestions()}
		</div>
	);
}

function areEqual(prevProps: any, nextProps: any) {
	return (
		JSON.stringify(prevProps.suggestData) ===
		JSON.stringify(nextProps.suggestData)
	);
}

export default React.memo(Suggestions, areEqual);

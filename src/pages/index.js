import React, { useState } from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import SuggestBar from "react-suggestbar";
import "../styles/global.css";

const fruits = [
	"apple",
	"apricot",
	"banana",
	"blackberry",
	"blueberry",
	"cherry",
	"date",
	"fig",
	"lemon",
	"peach",
	"pear",
	"pineapple",
	"plum",
	"raspberry",
	"strawberry",
	"watermelon",
];

function FruitAvailable({ suggestions }) {
	const renderFruits = () =>
		fruits.map((fruit, index) => (
			<li
				key={index}
				className={suggestions.includes(fruit) ? "suggested" : ""}
			>
				{fruit}
			</li>
		));

	return (
		<ul>
			<li className="list-name">Fruit available</li>
			{renderFruits()}
		</ul>
	);
}

const IndexPage = () => {
	const [suggestions, setSuggestions] = useState([]);
	const [acceptedValue, setAcceptedValue] = useState("");
	const [search, setSearch] = useState("");

	const change = (e) => {
		let value = e.target.value;

		setSearch(value);
		if (value === "") {
			setSuggestions([]);
		} else {
			setSuggestions(fruits.filter((fruit) => fruit.startsWith(value)));
		}
	};

	const submit = () => {
		setSearch("");
		setSuggestions([]);
		setAcceptedValue(search);
	};

	const click = (suggestion) => {
		setSearch("");
		setSuggestions([]);
		setAcceptedValue(suggestion);
	};

	return (
		<>
			<SEO title="Home" />
			<Header />
			<div className="core">
				<FruitAvailable suggestions={suggestions} />
				<div className="package-demo">
					<p>Value submitted: {acceptedValue}</p>
					<SuggestBar
						inputValue={search}
						onInputChange={change}
						onInputSubmit={submit}
						suggestData={suggestions}
						onSuggestClick={click}
						inputPlaceholder={"Type something..."}
						submitBtn={"Submit"}
						inputClassName={"input"}
						submitBtnClassName={"submit-btn"}
						containerClassName={"container"}
						suggestContainerClassName={"suggest-container"}
						suggestClassName={"suggest"}
					/>
				</div>
			</div>
		</>
	);
};

export default IndexPage;

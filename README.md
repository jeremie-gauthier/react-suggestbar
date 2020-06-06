# react-suggestbar

A simple searchbar with suggestion as you type

[live demo](https://jeremie-gauthier.github.io/react-suggestbar)

[source](https://github.com/jeremie-gauthier/react-suggestbar)

## Summary

- [Installing](https://github.com/jeremie-gauthier/react-suggestbar#installing)
- [Description](https://github.com/jeremie-gauthier/react-suggestbar#description)
- [Usage](https://github.com/jeremie-gauthier/react-suggestbar#usage)
- [Props](https://github.com/jeremie-gauthier/react-suggestbar#props)

## Installing

```
$ npm install react-suggestbar
```

## Description

It's a simple component that show you suggestions as you type.

The suggestions are hidden when the focus is no longer contains in the `<div/>` container.

The user can use them to autocomplete the `<input/>`.

It makes use of controlled form.

## Usage

```js
import React from "react";
import SuggestBar from "react-suggestbar";

const fruits = [
	"apple",
	"apricot",
	"banana",
	"blackberry",
	"blueberry",
	"cherry",
	"peach",
	"pear",
	"pineapple",
	"plum",
];

function Component() {
	const [suggestions, setSuggestions] = useState([]);
	const [search, setSearch] = useState("");

	const change = (evt) => {
		const value = evt.target.value;

		setSearch(value);
		setSuggestions(fruits.filter((fruit) => fruit.startsWith(value)));
	};

	const submit = () => {
		console.log(`Submit: ${search}`);
		setSearch("");
	};

	const click = (suggestion) => {
		console.log(`Accept suggestion: ${suggestion}`);
		setSearch("");
	};

	return (
		<SuggestBar
			inputValue={search}
			onInputChange={change}
			onInputSubmit={submit}
			suggestData={suggestions}
			onSuggestClick={click}
		/>
	);
}

export default Component;
```

## Props

| name                      | required | type                                                 | default  | description                                                                               |
| ------------------------- | -------- | ---------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| inputValue                | **yes**  | any                                                  |          | The `value` attribute of the `<input/>`                                                   |
| inputType                 | no       | string                                               | `"text"` | The `type` attribute of the `<input/>`                                                    |
| inputPlaceholder          | no       | string                                               | `""`     | The `placeholder` attribute of the `<input/>`                                             |
| onInputChange             | **yes**  | (event: React.ChangeEvent<HTMLInputElement>) => void |          | The event handler for the `onChange` event listener of the `<input/>`                     |
| onInputSubmit             | **yes**  | VoidFunction                                         |          | The event handler for the `onSubmit` event listener of the `<input/>` and the `<button/>` |
| submitBtn                 | no       | React.ReactNode                                      | `"Ok"`   | The content (children) of the `<button/>`                                                 |
| suggestData               | **yes**  | string[]                                             |          | The list of suggestions the suggestbar must show                                          |
| onSuggestClick            | **yes**  | (suggestion: string) => void                         |          | The event handler for the `onClick` event listener of each suggestion                     |
| containerClassName        | no       | string                                               |          | A CSS className for the `<div/>` container                                                |
| inputClassName            | no       | string                                               |          | A CSS className for the `<input/>`                                                        |
| submitBtnClassName        | no       | string                                               |          | A CSS className for the submit `<button/>`                                                |
| suggestContainerClassName | no       | string                                               |          | A CSS className for the `<div/>` container of the suggestions                             |
| suggestClassName          | no       | string                                               |          | A CSS className for each suggestion (`<button/>`)                                         |

## LICENSE

[MIT](https://github.com/jeremie-gauthier/react-suggestbar/blob/master/LICENSE)

import React from "react";
import styles from "./header.module.css";

export default () => (
	<header>
		<h1>react-suggestbar</h1>
		<h2>
			npm package made by{" "}
			<a
				href="https://github.com/jeremie-gauthier"
				target="_blank"
				rel="noreferrer"
			>
				jergauth
			</a>
		</h2>
		<div className={styles.links}>
			<a
				href="https://github.com/jeremie-gauthier/react-suggestbar"
				target="_blank"
				rel="noreferrer"
			>
				source
			</a>
			<a
				href="https://github.com/jeremie-gauthier/react-suggestbar/blob/master/README.md"
				target="_blank"
				rel="noreferrer"
			>
				doc
			</a>
			<a
				href="https://github.com/jeremie-gauthier/react-suggestbar/blob/master/LICENSE"
				target="_blank"
				rel="noreferrer"
			>
				license
			</a>
		</div>
	</header>
);

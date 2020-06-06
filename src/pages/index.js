import React from "react";
import SEO from "../components/seo";
import "../styles/global.css";

const IndexPage = () => {
	return (
		<>
			<SEO title="Home" />
			<header>
				<h1>react-suggestbar</h1>
				<a
					href="https://github.com/jeremie-gauthier/react-suggestbar"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
			</header>
		</>
	);
};

export default IndexPage;

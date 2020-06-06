const ghpages = require("gh-pages");

ghpages.publish(
	"public",
	{
		branch: "gh-pages",
		repo: "git@github.com:jeremie-gauthier/react-suggestbar.git",
	},
	() => {
		console.log("Deploy Complete!");
	}
);

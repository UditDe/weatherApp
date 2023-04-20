module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"@react-native-community"
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"comma-dangle": [2, "never"],
		"react/jsx-filename-extention": [0, { extensions: [".js", ".jsx"] }],
		"no-use-before-define": [
			"error",
			{ functions: true, classes: true, variables: false }
		],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto"
			}
		]
	}
};

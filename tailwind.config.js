module.exports = {
	content: [
		"./src/**/*.{html,js,jsx,ts,tsx}", // Ajuste os caminhos conforme sua estrutura de pastas
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			content: {
				arrowLink: 'url("/src/assets/icon/arrow.svg")',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

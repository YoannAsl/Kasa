module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: { sans: ['Montserrat'] },
		extend: {
			colors: {
				primary: '#ff6060',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

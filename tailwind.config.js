/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				rose: "#780000", // Barn-red https://coolors.co/780000
				red: "#C1121F", // Fire brick https://coolors.co/c1121f
				neutral: "#FDF0D5", // Papaya whip https://coolors.co/fdf0d5
				blue: "#003049", //Prussian blue https://coolors.co/003049
				sky: "#669BBC", // Air superiority blue https://coolors.co/669bbc
			},
		},
	},
	plugins: [],
};

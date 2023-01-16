/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	safelist: ["faq-row-wrapper", "row-title-text", "row-content-text"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				vgray: {
					1100: "#101114",
					900: "#17181C",
					700: "#1E1F24",
					500: "#23262D",
					300: "#2C303B",
				},
				mute: "#6B6F82",
				"mute-active": "#8288A5",
				"mute-active-2": "#979ebf",
				light: "#FDFDFD",
				green: "#00E28C",
				red: "#F6465D",
				orange: "#FFB300",
				primary: "#6366f1",
			},
		},
	},
	plugins: [],
};

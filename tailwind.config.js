/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	// content: ["./index.html", "./src/*/.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textColor: {
				"main": "#303133",
				"primary": "#67c23a",
				"info-4": "rgba(0, 0, 0, 0.45)",
				"info-8": "rgba(0, 0, 0, 0.8)",
				"info-88": "rgba(0, 0, 0, 0.88)",
				"w-80": "rgba(255, 255, 255, 0.8)",
				"w-60": "rgba(255, 255, 255, 0.8)",
				"w-64": "rgba(255, 255, 255, 0.64)",
				"w-48": "rgba(255, 255, 255, 0.48)",
				label: "rgba(132, 133, 135, 1)",
				"lable-70": "#ffffffa3"
			},
			fontFamily: {
				"inter": ["Inter", "sans-serif"]
			},
			screens: {
				"3xl": "1920px"
			},
			gridTemplateRows: {
				auto: "minmax(auto,.25fr) auto"
			},
			letterSpacing: {
				tight: "-.025em",
				normal: "0",
				wide: ".025em",
				h2: "-.72px"
			},
			width: {
				"25r": "25rem",
				"46/100": "46%",
				"8/10": "80%"
			},
			height: {
				"25r": "25rem"
			},
			backgroundColor: {
				"main": "#67c23a",
				"ly-mian": "#050505",
				"ly-check": "rgba(255, 255, 255, 0.03)",
				"ly-info-70": "rgba(255, 255, 255, 0.064)",
				"ly-line": "rgba(255, 255, 255, 0.06)"
			}
		}
	},
	plugins: [
		function ({ addBase }) {
			addBase({
				".el-button": {
					"background-color": "var(--el-button-bg-color,var(--el-color-white))"
				}
			});
		}
	]
};

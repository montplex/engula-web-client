/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	// content: ["./index.html", "./src/*/.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textColor: {
				info: "#303133",
				"info-4": "rgba(0, 0, 0, 0.45)",
				"info-8": "rgba(0, 0, 0, 0.8)",
				"info-88": "rgba(0, 0, 0, 0.88)",
				"w-80": "rgba(255, 255, 255, 0.8)",
				"w-60": "rgba(255, 255, 255, 0.8)",
				label: "rgba(132, 133, 135, 1)",
				"lable-70": "#ffffffa3"
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

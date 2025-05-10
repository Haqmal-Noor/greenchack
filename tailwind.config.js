/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#e6f9ec",
					100: "#ccf3d9",
					200: "#99e7b3",
					300: "#66db8d",
					400: "#33cf67",
					500: "#00c341", // Primary green
					600: "#009c34",
					700: "#007527",
					800: "#004e1a",
					900: "#00270d",
				},
				secondary: {
					50: "#e6f6f2",
					100: "#ccede5",
					200: "#99dbcb",
					300: "#66c8b0",
					400: "#33b696",
					500: "#00a37b", // Teal-green tone
					600: "#008364",
					700: "#00634c",
					800: "#004335",
					900: "#00221b",
				},

				accent: {
					50: "#fff4e6",
					100: "#ffe4cc",
					200: "#ffc999",
					300: "#ffad66",
					400: "#ff9233",
					500: "#ff7700", // Primary accent (orange)
					600: "#cc5f00",
					700: "#994700",
					800: "#663000",
					900: "#331800",
				},

				success: {
					500: "#10b981",
				},
				warning: {
					500: "#f59e0b",
				},
				error: {
					500: "#ef4444",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Montserrat", "sans-serif"],
			},
			boxShadow: {
				soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
				medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
				strong: "0 10px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [],
};

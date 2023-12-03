const { nextui } = require("@nextui-org/theme");

module.exports = {
    mode: "jit",
    purge: [
		"./app/**/*.{js,ts,jsx,tsx}",
    	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./public/index.html"
	],
    content: [
		"./app/**/*.{js,ts,jsx,tsx}",
    	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./public/index.html",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
				ground: "#040D12",
                primary: "#183D3D",
                secondary: "#5C8374",
				foreground: "#93B1A6"
            }
        },
		screens:{
			'sm': '576px',
			// => @media (min-width: 576px) { ... }

			'md': '960px',
			// => @media (min-width: 960px) { ... }

			'lg': '1440px',
			// => @media (min-width: 1440px) { ... }
		}
    },
    plugins: [nextui]
}

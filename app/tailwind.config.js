module.exports = {
    mode: "jit",
    purge: [
		"./app/**/*.{js,ts,jsx,tsx}",
    	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
		"./public/index.html"
	],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ground:"#E0E0CE",
                hover:"#FFD8A9",
                primary:"#000",
                secondary:"#F2AF29"
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
    plugins: []
}

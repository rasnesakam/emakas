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
		"./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                ground: "#fafafa",
				onGround: "#e4e5f1",
                hover: "#d2d3db",
                primary: "#484b6a",
                secondary: "#9394a5"
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

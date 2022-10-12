module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
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

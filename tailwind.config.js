/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
            './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
        ],
        theme: {
            extend: {
                backgroundImage: {
                    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                },
                colors:{
                    primary:"#000000",
                    ground:"#FFFFFF",
                    secondary:"#d1d5db"
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
        },
        plugins: [nextui()],
    }

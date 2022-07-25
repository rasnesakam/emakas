module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ground:"#E8F9FD",
                hover:"#2155CD",
                primary:"#0AA1DD",
                secondary:"#79DAE8"
            }
        }
    },
    plugins: []
}

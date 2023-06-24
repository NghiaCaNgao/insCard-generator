/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto', "sans-serif"],
                'roboto-mono': ["Roboto Mono", "monospace"],
                'ins': ["Instagram Sans", "sans-serif"],
                'poppins': ['Poppins', "sans-serif"]
            }
        },
    },
    plugins: [],
}
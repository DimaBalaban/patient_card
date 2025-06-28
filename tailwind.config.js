/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-in-soft': {
                    '0%': {opacity: 0, transform: 'blur(5px)'},
                    '100%': {opacity: 1, transform: 'blur(0)'},
                },
            },
            animation: {
                'fade-in-soft': 'fade-in-soft 0.5s ease-out forwards',
            },
        },
    },

    plugins:
        [],
}


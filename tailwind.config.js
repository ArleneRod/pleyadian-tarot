// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mulish: ['"Mulish"', 'sans-serif'],
                pacifico: ['"Pacifico"', 'cursive'],
                cinzel: ['"Cinzel Decorative"', 'cursive'],
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            }
        },
    },
    plugins: [],







});


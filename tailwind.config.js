﻿/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    theme: {
        // Some useful comment
        fontFamily: {
            Roboto: ['"Roboto Slab"', "serif"],
            OpenSans: ['"Open Sans"', "sans-serif"],
            Playfair: ['"Playfair Display"', "serif"],
            Montserrat: ['"Montserrat"', "sans-serif"],
        },
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [daisyui],
    daisyui: {
        themes: ["night"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};

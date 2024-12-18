/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",

    content: [
        "./src/**/*.{html,js}",
        "./src/views/**/*.{html,js}", // Explicitly include views subdirectory if needed
        "./src/js/**/*.{html,js}"
      ],

    safelist: [
        "hamburger-toggle", "bg-red-600",
    ],

    theme: {
        screens: {
            'xs': '320px',
            // => @media (min-width: 320px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 640px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
      extend: {},
    },
    plugins: [],
}


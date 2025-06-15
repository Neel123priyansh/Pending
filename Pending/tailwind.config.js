/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'playfair-roman': ['"Playfair Display Roman"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'cormorant': [ '"Cormorant Garamond"', 'serif'],
        'urbanist': ['"Urbanist"', 'sans-serif'],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        }
      },
    },
    },
  plugins: [],
}


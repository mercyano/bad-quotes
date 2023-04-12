/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "veryDarkBlue": "#050811",
        "green": "#154F3C",
      },
      fontFamily: {
        "courier": ["Courier Prime", "monospace"],
      }
    },
  },
  plugins: [],
};

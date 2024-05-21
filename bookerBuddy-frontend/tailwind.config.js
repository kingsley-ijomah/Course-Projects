/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#4F46E5",
        lightBlue: "#E0F2FE",
        purpleViolet: "#DDD6FE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

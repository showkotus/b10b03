/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "lets-connect-bg": "url('/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};

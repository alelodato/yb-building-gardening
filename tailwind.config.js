/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#C35333",      // per “Building”
          green: "#2F7A45",    // per “Gardening”
          dark: "#111827",     // testi principali
          light: "#F9FAFB",    // sfondi chiari
        },
      },
      boxShadow: {
        card: "0 15px 35px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

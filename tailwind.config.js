module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e9de2',
        'primary-dark': '#2177a8', // darker variant for hover
        'primary-light': '#e6f4fc', // light bg variant
      },
    },
  },
  plugins: [],
}

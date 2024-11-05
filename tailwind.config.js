/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linkedin: "#0e76a8",
        mail: "#ea4335",
        git: "#333", // Adding your color with a custom name 'linkedin'
      },
    },
  },
  plugins: [],
};

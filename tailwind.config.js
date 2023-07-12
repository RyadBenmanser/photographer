/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff7ac6",

          secondary: "#bf95f9",

          accent: "#ffb86b",

          neutral: "#414558",

          "base-100": "#272935",

          info: "#8be8fd",

          success: "#52fa7c",

          warning: "#f1fa89",

          error: "#ff5757",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

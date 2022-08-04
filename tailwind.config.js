/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1250px" },
      lg: { max: "900px" },
      md: { max: "450px" },
      sm: { max: "300px" },
    },
    extend: {
      colors: {
        colorPrimary: "#112240",
        colorPrimaryLight: "#233554",
        colorPrimaryDark1: "#020c1b",
        colorPrimaryDark2: "#0a192f",
        colorPrimaryDark3: "rgba(2, 12, 27, 0.7)",

        colorSecondary: "#8892b0",
        colorSecondaryDark: "#495670",
        colorSecondaryLight1: "#a8b2d1",
        colorSecondaryLight2: "#ccd6f6",

        colorAccent: "#64ffda",
        colorAccentDark: "rgba(100, 255, 218, 0.1)",
        colorAccent2: "#f57dff",
        colorAccent3: "#57cbff",

        colorNeutral: "#e6f1ff",
      },

      fontFamily: {
        calibre: ["calibre", "sans-serif"],
        sfMono: ["sfMono", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// --dark-navy: #020c1b;
//     --navy: ;
//     --light-navy: #112240;
//     --lightest-navy: #233554;
//     --navy-shadow: rgba(2, 12, 27, 0.7);
//     --dark-slate: #495670;
//     --slate: #8892b0;
//     --light-slate: #a8b2d1;
//     --lightest-slate: #ccd6f6;
//     --white: #e6f1ff;
//     --green: #64ffda;
//     --green-tint: rgba(100, 255, 218, 0.1);
//     --pink: #f57dff;
//     --blue: #57cbff;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0A061D",
        "medium-dark": "#282633",
        "csp-brand": "#6246EA",
        "csp-red": "#F05252",
        "csp-sunglow": {
          DEFAULT: "#F99D07",
          200: "#FFE688",
        },
        "csp-gogreen": "#2BA185",
        "csp-blueish": "#17B5B5",
        "csp-dark": "#1F1B33",
        "csp-medium-dark": "#353248",

        // updated color
        gray: {
          DEFAULT: "#27272A",
          900: "#18181B",
          800: "#27272A",
          700: "#3F3F46",
          600: "#52525B",
          500: "#71717A",
          400: "#A1A1AA",
          300: "#D4D4D8",
          200: "#E4E4E7",
          100: "#F4F4F5",
          50: "#FAFAFA",
        },
        brand: {
          DEFAULT: "#6246EA",
          900: "#392C83",
          800: "#422DA6",
          700: "#5134CE",
          600: "#6246EA",
          500: "#6D5FF5",
          400: "#817EFB",
          300: "#A3A8FE",
          200: "#C5CAFF",
          100: "#DFE3FF",
          50: "#EEF0FF",
        },
        gogreen: {
          DEFAULT: "#45BC9E",
          900: "#1B463D",
          800: "#1C5349",
          700: "#1E6759",
          600: "#20816C",
          500: "#2BA185",
          400: "#45BC9E",
          300: "#7FDAC0",
          200: "#A6E9D3",
          100: "#D3F4E9",
          50: "#F2FBF8",
        },
        blueish: {
          DEFAULT: "#30D1CE",
          900: "#144B4D",
          800: "#125A5D",
          700: "#117174",
          600: "#0F8D8F",
          500: "#17B5B5",
          400: "#30D1CE",
          300: "#60E8E0",
          200: "#9BF4EC",
          100: "#CDFAF6",
          50: "#F0FDFB",
        },
        sunglow: {
          DEFAULT: "#FFE688",
          900: "#7A340D",
          800: "#943E0C",
          700: "#B75106",
          600: "#DD7502",
          500: "#F99D07",
          400: "#FFBF20",
          300: "#FFD03E",
          200: "#FFE688",
          100: "#FFF3C6",
          50: "#FFFBEB",
        },
        fireopal: {
          DEFAULT: "#EF6461",
          900: "#7A2422",
          800: "#932321",
          700: "#B12724",
          600: "#D3322F",
          500: "#E74F4C",
          400: "#EF6461",
          300: "#F8ABA9",
          200: "#FBCECD",
          100: "#FDE4E3",
          50: "#FDF3F3",
        },
        csp_neutral: {
          600: "#3C3754",
          DarkBG: "#2C2836",
          contrast: "#50497C",
          contrast1: "#BCBCCD",
        },
        platinum: {
          200: "#E6E9EA",
          300: "#D3D3D3",
          400: "#A3A3A3",
          600: "#535353",
          700: "#272727",
          800: "#272727",
        },
      },
      fontFamily: {
        main: "Poppins, sans-serif",
      },
      outline: {
        brand: {
          DEFAULT: "2px solid #A3A8FE",
          300: "2px solid #A3A8FE",
          350: "2px solid #6857B8",
          800: "2px solid #422DA6",
        },
        gray: {
          DEFAULT: "2px solid #A1A1AA",
          100: "2px solid #F4F4F5",
        },
        fireopal: {
          DEFAULT: "2px solid #F8ABA9",
        },
        gogreen: {
          DEFAULT: "2px solid #7FDAC0",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
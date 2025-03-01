import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",

  content: [
    "./src/components/**/*.vue",
    "./src/utils/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
  
        light: {
          100: "#F7F7F7",
          200: "#FFFFFF",
        },
  
        dark: {
          100: "#000000",
          90: "#1A1A1A",
          20: "#CCCCCC",
          12: "#E0E0E0",
          8: "#EBEBEB",
          4: "#F5F5F5",
        },
  
        green: {
          8: "#E6F2E9",
          100: "#28A756",
        },
  
        orange: {
          100: "#FCA95D",
        },
  
        current: "currentColor",
      },
    },

    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
      "in-out": "cubic-bezier(0.85, 0, 0.15, 1)",
    },

    transitionDuration: {
      DEFAULT: "500ms",
    },

    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
    },

    fontSize: {
      "title-56": [
        "56px",
        {
          lineHeight: "60px",
          fontWeight: "600",
        },
      ],
      "title-30": [
        "30px",
        {
          lineHeight: "35px",
          fontWeight: "600",
        },
      ],
      "title-21": [
        "21px",
        {
          lineHeight: "25px",
          fontWeight: "600",
        },
      ],
      "title-18": [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "600",
        },
      ],
      "title-16": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "600",
        },
      ],
      "title-14": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "600",
        },
      ],

      "subtitle-30": [
        "30px",
        {
          lineHeight: "40px",
          fontWeight: "500",
        },
      ],
      "subtitle-21": [
        "21px",
        {
          lineHeight: "25px",
          fontWeight: "500",
        },
      ],
      "subtitle-18": [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "500",
        },
      ],
      "subtitle-16": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      "subtitle-14": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],

      "body-16": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      "body-14": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      "body-12": [
        "12px",
        {
          lineHeight: "15px",
          fontWeight: "400",
        },
      ],

      // "button-18": [
      //   "18px",
      //   {
      //     lineHeight: "25px",
      //     fontWeight: "600",
      //   },
      // ],
      "button-16": [
        "16px",
        {
          lineHeight: "25px",
          fontWeight: "600",
        },
      ],
      "button-14": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "600",
        },
      ],
      "button-12": [
        "12px",
        {
          lineHeight: "15px",
          fontWeight: "600",
        },
      ],
    },

    backgroundImage: {
      "dark-gradient": "linear-gradient(100.47deg, #5C5F4C 0%, #28362D 100%)",
    },
  },

  plugins: [],
} as Config;

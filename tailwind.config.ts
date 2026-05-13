import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8257e6",
          light: "#a78bfa",
        },
        green: {
          DEFAULT: "#00b37e",
          light: "#00d68f",
        },
        bg: {
          primary: "#0a0a0a",
          card: "#202024",
          "card-hover": "#29292e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        border: {
          DEFAULT: "#323238",
          light: "#3e3e42",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8257e6 0%, #00b37e 100%)",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "Nunito", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.03em",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
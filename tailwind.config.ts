import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        charcoal: "#121212",
        parchment: "#f5f1e9",
        gold: {
          300: "#d9bd7c",
          400: "#c9a55b",
          500: "#b68a3c",
          600: "#8f6727",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(10, 10, 10, 0.08)",
        gold: "0 18px 60px rgba(182, 138, 60, 0.18)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e2c98e 0%, #b68a3c 52%, #f0dba9 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

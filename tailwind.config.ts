import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2",
          hover: "#357ABD",
          light: "#EBF3FC",
        },
        secondary: {
          DEFAULT: "#F5C542",
          hover: "#E5B32E",
          light: "#FEF9E8",
        },
        accent: {
          DEFAULT: "#FF6B6B",
          hover: "#FA5252",
          light: "#FFEAEA",
        },
        cream: "#FFF9F0",
        surface: "#FFFFFF",
        comic: {
          border: "#2D2D2D",
          text: "#2D2D2D",
          muted: "#64748B",
          grid: "#EADBC8",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        quote: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        comic: "4px 4px 0px #2D2D2D",
        "comic-sm": "2px 2px 0px #2D2D2D",
        "comic-md": "5px 5px 0px #2D2D2D",
        "comic-lg": "8px 8px 0px #2D2D2D",
        "comic-xl": "12px 12px 0px #2D2D2D",
        "comic-yellow": "5px 5px 0px #F5C542",
        "comic-blue": "5px 5px 0px #4A90E2",
      },
      borderRadius: {
        comic: "20px",
        "comic-sm": "12px",
        "comic-pill": "999px",
      },
      borderWidth: {
        comic: "2px",
        "comic-thick": "3px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-6px)" },
          "40%, 80%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shake: "shake 0.4s ease-in-out",
        "bounce-short": "bounceShort 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;

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
          DEFAULT: "#126575",
          hover: "#0D4C5A",
          light: "#E5F0F0",
        },
        secondary: {
          DEFAULT: "#E8C547",
          hover: "#D6B331",
          light: "#FBF4D7",
        },
        accent: {
          DEFAULT: "#126575",
          hover: "#0D4C5A",
          light: "#E5F0F0",
        },
        cream: "#F5F3ED",
        surface: "#FFFDF8",
        comic: {
          border: "#17333A",
          text: "#17333A",
          muted: "#61727A",
          grid: "#D9E1DE",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        quote: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        comic: "6px 6px 0 rgba(23, 51, 58, 0.12)",
        "comic-sm": "3px 3px 0 rgba(23, 51, 58, 0.1)",
        "comic-md": "8px 8px 0 rgba(23, 51, 58, 0.14)",
        "comic-lg": "10px 12px 0 rgba(23, 51, 58, 0.14)",
        "comic-xl": "14px 16px 0 rgba(23, 51, 58, 0.15)",
        "comic-yellow": "6px 6px 0 rgba(232, 197, 71, 0.65)",
        "comic-blue": "6px 6px 0 rgba(18, 101, 117, 0.28)",
      },
      borderRadius: {
        comic: "16px",
        "comic-sm": "10px",
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

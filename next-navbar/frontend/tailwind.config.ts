import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1066px",
      xl: "1284px",
      "2xl": "1536px",
      "3xl": "1654px",
      "1024": "1024px",
    },
    colors: {
      "primary-color": "#DA3540",
      "secondary-color": "#373435",
      white: "#fff",
      black: "#000",
      gray: "#F8F8F9",
    },
    textShadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
      DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.5)",
      lg: "0 4px 6px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBackground: "rgba(255, 255, 255, 0.60)",
        darkBackground: "rgba(19, 19, 19, 0.40)",
      },
    },
  },
  variants: {
    extend: {
      placeholder: ["responsive"],
    },
  },
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
};

export default config;

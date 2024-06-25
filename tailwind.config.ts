import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "375px", //  375px - all bigger size
      md: "768px", //  768px - all bigger size
      lg: "1024px", //  1024px - all bigger size
      md_lg: "1280px", //  1280px - all bigger size
      //
      xl: "1440px", //  1440px - all bigger size
      "2xl": "1500px", //  1500px - all bigger size
      "3xl": "1900px", //  1900px - all bigger size
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        open_sans: "var(--open_sans)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      colors: {
        "dealguru-blue": "#0067e1",
        "dealguru-white": "#ffffff",
        "dealguru-black": "#1B2738",

        "dealguru-grey": "rgb(245, 245, 245)",
      },
      gap: {
        main_card: "18px",
      },
      borderRadius: {
        main_card: "12px",
      },
      padding: {
        "x-pad": "4rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

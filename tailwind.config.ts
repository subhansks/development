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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      screens: {
        sm: "375px",
        md: "760px",
        lg: "1080px",
        xl: "1440px",
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
        "x-pad": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#ffffff",
        "primaryBlue": "#598EEB",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black": "#000000",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        sm: "0.9375rem",
        base: "1rem",
        xl: "2rem",
        "2xl": "4.5rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      }
    },
  },
  plugins: [],
} satisfies Config;

import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gotham)", ...fontFamily.sans],
      },
      fontSize: {
        "2rem": "2rem",
        "2.5rem": "2.5rem",
      },
      lineHeight: {
        "4.5": "1.125rem",
      },
      borderRadius: {
        "5px": "5px",
      },
      colors: {
        "red": {
          DEFAULT: "#e50914",
        },
        "grey": {
          DEFAULT: "#f0f0f0",
        },
      },
      maxWidth: {
        container: "1546px",
      },
      gridTemplateColumns: {
        testimonial: "0.352fr 1fr 0.352fr",
      },
      gridTemplateRows: {
        testimonial: "auto 0.3fr 0.7fr auto",
      },
    },
  },
  plugins: [],
};
export default config;

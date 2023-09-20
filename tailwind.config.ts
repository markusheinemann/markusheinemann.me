import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sport": "url('/hero/sport.jpeg')",
        "hero-tech": "url('/hero/tech.jpeg')",
      },
      fontFamily: {
        hero: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

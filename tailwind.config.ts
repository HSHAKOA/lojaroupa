import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050608",
        graphite: "#171B22",
        steel: "#5A6472",
        line: "#E7EAF0",
        cloud: "#F6F8FB",
        royal: "#0057FF",
        navy: "#06162F"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(6, 22, 47, 0.12)",
        blue: "0 16px 36px rgba(0, 87, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",
        muted: "var(--muted)",
        clay: {
          DEFAULT: "#BE5227",
          dark: "#9A4220",
          light: "#E3A98C",
        },
        charcoal: "#211C17",
        sand: "#F6F1E7",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(190, 82, 39, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

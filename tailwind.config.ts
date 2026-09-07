import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0B0D",
          secondary: "#121417",
          tertiary: "#1A1D21",
          subtle: "#24292F",
        },
        surface: {
          card: "#121417",
          elevated: "#181B1F",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(249, 115, 22, 0.4)",
        },
        accent: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
          muted: "rgba(249, 115, 22, 0.12)",
          border: "rgba(249, 115, 22, 0.35)",
        },
        brandText: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

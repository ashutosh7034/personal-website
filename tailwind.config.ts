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
          paper: "#FAF8F5",
          card: "#FFFFFF",
          subtle: "#F4EFEA",
          elevated: "#EDE6DD",
        },
        surface: {
          card: "#FFFFFF",
          subtle: "#F4EFEA",
          elevated: "#EDE6DD",
          border: "#E5E0D8",
          borderHover: "#C2410C",
        },
        accent: {
          DEFAULT: "#C2410C", // Warm Terracotta / Burnt Amber Rust
          hover: "#9A3412",
          muted: "rgba(194, 65, 12, 0.08)",
          border: "rgba(194, 65, 12, 0.25)",
        },
        brandText: {
          primary: "#18181B", // Deep charcoal espresso
          secondary: "#4B5563", // Muted slate prose
          muted: "#71717A", // Subtle footnotes
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(24, 24, 27, 0.04), 0 6px 16px rgba(24, 24, 27, 0.03)",
        cardHover: "0 4px 6px -1px rgba(24, 24, 27, 0.05), 0 12px 24px -2px rgba(24, 24, 27, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;

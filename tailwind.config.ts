import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        slateText: "#475569",
        cloud: "#f8fafc",
        line: "#e2e8f0",
        blue: "#2563eb",
        sky: "#38bdf8",
        emerald: "#10b981",
        amber: "#f59e0b"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.12)",
        glow: "0 22px 42px rgba(37, 99, 235, 0.22)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-sheen": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-sheen": "slide-sheen 1.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

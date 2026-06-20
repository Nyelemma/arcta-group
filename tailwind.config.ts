import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060B16",
          900: "#0B1426",
          850: "#0E1A30",
          800: "#12213D",
          700: "#1B2E52",
          600: "#243C68",
          500: "#33507F",
        },
        royal: {
          50: "#EFF4FF",
          100: "#DBE6FE",
          200: "#BFD3FE",
          300: "#93B4FD",
          400: "#608AFA",
          500: "#1D4ED8",
          600: "#1A45C0",
          700: "#1739A0",
          800: "#162F80",
          900: "#172A6B",
        },
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        mist: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#EEF2F7",
          300: "#E2E8F0",
          400: "#CBD5E1",
          500: "#94A3B8",
          600: "#64748B",
          700: "#475569",
          800: "#334155",
          900: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 60% at 80% 0%, rgba(29,78,216,0.35) 0%, rgba(11,20,38,0) 70%)",
        "emerald-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.25) 0%, rgba(11,20,38,0) 70%)",
        "navy-fade":
          "linear-gradient(180deg, rgba(11,20,38,0) 0%, rgba(11,20,38,0.6) 55%, #0B1426 100%)",
        "brand-gradient":
          "linear-gradient(135deg, #1D4ED8 0%, #10B981 100%)",
        "brand-text":
          "linear-gradient(120deg, #1D4ED8 0%, #3B82F6 40%, #10B981 100%)",
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 12px 32px rgba(16,24,40,0.08)",
        "card-lg": "0 8px 24px rgba(16,24,40,0.08), 0 24px 64px rgba(16,24,40,0.12)",
        "royal-glow": "0 10px 40px rgba(29,78,216,0.35)",
        "emerald-glow": "0 10px 40px rgba(16,185,129,0.30)",
        glass: "0 8px 32px rgba(11,20,38,0.10)",
        "inset-hairline": "inset 0 0 0 1px rgba(255,255,255,0.08)",
      },
      letterSpacing: {
        wider2: "0.16em",
        widest2: "0.26em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "spin-slow": "spin-slow 1.1s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

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
          950: "#060D16",
          900: "#0E1B2B",
          850: "#0F1F32",
          800: "#13263D",
          700: "#1C3454",
          600: "#264566",
          500: "#345A7D",
        },
        royal: {
          50: "#FBF7ED",
          100: "#F5ECD4",
          200: "#EBD9A9",
          300: "#DFC67E",
          400: "#D4B562",
          500: "#C9A84B",
          600: "#B8943F",
          700: "#9A7A34",
          800: "#7C6129",
          900: "#5E491F",
        },
        emerald: {
          50: "#FDF9EF",
          100: "#F9F0DC",
          200: "#F0E2B8",
          300: "#E6D394",
          400: "#DDC470",
          500: "#D4B85A",
          600: "#BFA04E",
          700: "#9F8541",
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
          "radial-gradient(60% 60% at 80% 0%, rgba(201,168,75,0.28) 0%, rgba(14,27,43,0) 70%)",
        "emerald-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(212,184,90,0.22) 0%, rgba(14,27,43,0) 70%)",
        "navy-fade":
          "linear-gradient(180deg, rgba(14,27,43,0) 0%, rgba(14,27,43,0.6) 55%, #0E1B2B 100%)",
        "brand-gradient":
          "linear-gradient(135deg, #C9A84B 0%, #D4B85A 100%)",
        "brand-text":
          "linear-gradient(120deg, #C9A84B 0%, #DFC67E 45%, #D4B85A 100%)",
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 12px 32px rgba(16,24,40,0.08)",
        "card-lg": "0 8px 24px rgba(16,24,40,0.08), 0 24px 64px rgba(16,24,40,0.12)",
        "royal-glow": "0 10px 40px rgba(201,168,75,0.35)",
        "emerald-glow": "0 10px 40px rgba(212,184,90,0.30)",
        glass: "0 8px 32px rgba(14,27,43,0.10)",
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

import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(45, 100%, 97%)",
          100: "hsl(45, 100%, 92%)",
          200: "hsl(45, 100%, 85%)",
          300: "hsl(45, 100%, 75%)",
          400: "hsl(45, 90%, 65%)",
          500: "hsl(45, 80%, 55%)",
          600: "hsl(45, 75%, 45%)",
          700: "hsl(45, 70%, 35%)",
          800: "hsl(45, 65%, 25%)",
          900: "hsl(45, 60%, 15%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "hsl(0, 100%, 97%)",
          100: "hsl(0, 100%, 92%)",
          200: "hsl(0, 90%, 85%)",
          300: "hsl(0, 85%, 75%)",
          400: "hsl(0, 80%, 65%)",
          500: "hsl(0, 75%, 55%)",
          600: "hsl(0, 70%, 45%)",
          700: "hsl(0, 65%, 35%)",
          800: "hsl(0, 60%, 25%)",
          900: "hsl(0, 55%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "hsl(210, 100%, 97%)",
          100: "hsl(210, 100%, 92%)",
          200: "hsl(210, 95%, 85%)",
          300: "hsl(210, 90%, 75%)",
          400: "hsl(210, 85%, 65%)",
          500: "hsl(210, 80%, 55%)",
          600: "hsl(210, 75%, 45%)",
          700: "hsl(210, 70%, 35%)",
          800: "hsl(210, 80%, 25%)",
          900: "hsl(210, 85%, 15%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        arabic: ["var(--font-amiri)"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;

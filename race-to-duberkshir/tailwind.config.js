/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F0F4F8",
        "primary-200": "#D9E2EC",
        "primary-300": "#BCCCDC",
        "primary-400": "#9FB3C8",
        "primary-500": "#829AB1",
        "primary-600": "#627D98",
        "primary-700": "#486581",
        "primary-800": "#334E68",
        "secondary-100": "#E2E8F0",
        "secondary-200": "#CBD5E1",
        "secondary-300": "#94A3B8",
        "secondary-400": "#64748B",
        "secondary-500": "#475569",
        "secondary-600": "#334155",
        "secondary-700": "#1E293B",
        "secondary-800": "#0F172A",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3f1ea",
        "paper-2": "#ece9e0",
        ink: "#181613",
        "ink-soft": "#4b463e",
        "ink-faint": "#8b8478",
        accent: "#9a3320",
        line: "rgba(24, 22, 19, 0.14)",
        "line-2": "rgba(24, 22, 19, 0.30)",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "1320px",
      },
    },
  },
  plugins: [],
};

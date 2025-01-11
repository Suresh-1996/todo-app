module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" }, // Adjust to match text length
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "#3498db" },
        },
      },
      animation: {
        typing: "typing 3s steps(14, end) forwards", // 14 is the character count
        blink: "blink 0.5s step-end infinite",
      },
    },
  },
  plugins: [],
};

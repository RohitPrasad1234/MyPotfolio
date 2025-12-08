module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,255,255,0.9)" },
          "50%": { textShadow: "0 0 20px rgba(255,255,255,1)" },
        },
        fadeWord: {
          "0%": { opacity: 0, transform: "translateY(5px)" },
          "50%": { opacity: 1, transform: "translateY(0px)" },
          "100%": { opacity: 0, transform: "translateY(-5px)" },
        }
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out",
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s infinite ease-in-out",
        fadeWord: "fadeWord 2s ease-in-out",
      },
    },
  },
};

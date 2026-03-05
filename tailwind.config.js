export default {
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            from: { opacity: 0, transform: "translateY(8px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.4s ease",
        },
      },
    },
  };
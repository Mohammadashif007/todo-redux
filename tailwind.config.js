/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
              customBlue: '#1e40af',
            },
            backgroundImage: {
              "primary-gradient": "linear-gradient(90deg, #10b981, #3b82f6)",
              "secondary-gradient": "linear-gradient(30deg, #dc02c3, #5c53fe)",
          },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

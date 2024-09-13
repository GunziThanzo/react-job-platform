/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Define softer colors for dark mode
        gray: {
          100: '#f7fafc', // Light gray for light mode
          200: '#edf2f7', // Slightly darker gray for light mode
          300: '#e2e8f0', // Even darker gray for light mode
          400: '#cbd5e0', // Darker gray for light mode
          500: '#a0aec0', // Medium gray for light mode
          600: '#718096', // Dark gray for dark mode
          700: '#4a5568', // Darker gray for dark mode
          800: '#2d3748', // Even darker gray for dark mode
          900: '#1a202c', // Darkest gray for dark mode
        },
        green: {
          600: '#38a169', // Green for buttons
          700: '#2f855a', // Darker green for hover states
          400: '#68d391', // Lighter green for accents
        },
      },
    },
  },
  plugins: [
    '@tailwindcss/line-clamp',
  ],
}
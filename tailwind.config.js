/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/*.{vue, ts}",
    "./components/*.{vue, ts}",
    "./modules/**/*.{vue, ts}",
    "./modules/**/components/*.{vue, ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      backgroundImage: (theme) => ({
        'hero-bg': "url('/assets/hero-dog.jpg')",
        'cat-card': "url('/assets/cat.jpg')",
        'dog-card': "url('/assets/dog-card.jpg')",
        'hamster-card': "url('/assets/hamster-card.jpg')",
        'services-bg': "url('/assets/services-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

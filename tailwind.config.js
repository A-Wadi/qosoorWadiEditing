module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1/4': '0 1 25%',
        '1/3': '0 1 calc(33.333% - 1rem)',
        '1/2': '0 1 calc(50% - 1rem)',
        '2/3': '0 1 calc(66.666% - 1rem)',
        '1/1': '0 1 100%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.666%',
        '3/4': '75%',
      },
      fontSize: {
        'xxxs': '4px',
        'xxs': '8px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
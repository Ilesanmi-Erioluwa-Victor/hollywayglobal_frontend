/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary_green: '#0D5520',
        primary_yellow: '#FDF1C9',
        secondary_yellow: '#FFC42D73',
        dark_blue: '#1C1D36',
        white_2: '#F8F8F8',
        white_3: '#F0FBF3',
        light_green: '#D6ECDC',
        dark_500: 'rgba(0, 0, 0, 0.67)',
        primary_grey: '#B6BBB2',
        white: '#FFFFFF',
        grey: '#BBBBC3',
        light_grey: '#B6BBB2',
        sunglow: '#0D5520',
        secondary_yellow_2: '#FFC42D',
        lighter_green: 'rgba(214, 236, 220, 0.4)',
        contact_grey: '#F8F8F8',
      },

      spacing: {
        '8vh': '8vh',
        '8vw': '8vw',
      },

      gridTemplateColumns: {
        'custom-grid': 'repeat(12, 1fr)',
      },

      gridColumn: {
        'span-custom': 'span 1 / span 3',
        'span-custom2': 'span 4 / span -1',
      },
    },
  },
  plugins: [],
};

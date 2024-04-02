/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderRadius: {
        'xs': '4px', // rounded
        'sm': '8px', // rounded-lg
      },
      boxShadow: {
        custom: '0 0.5rem 0.75rem rgba(0, 0, 0, 0.16)',
      },
      colors: {
        cta: {
          DEFAULT: '#0f81a3',
          hover: '#66aec5',
        },
        'dark-grayish-blue': '#747f8a',
        gallery: '#f7f7f8',
        gray: {
          'pill': '#eeeff1',
        },
        'green-pill': {
          text: '#15693b',
          background: '#ddf9ea',
        },
        'light-grayish-blue': '#f9f9fa',
        midnight: '#253648',
        'orange-pill': {
          text: '#764c25',
          background: '#fdefe2',
        },
        'very-dark-desaturated-blue': '#263648',
        'very-dark-orange': '#4f3319',
      },
      fontFamily: {
        sans: [
          'CSClarity-Regular',
          'CSClarity-Bold',
          'CSClarity-Thin',
          ...defaultTheme.fontFamily.sans
        ],
      },
      fontSize: {
        'base': '20px', // text-xl
        'sm': '16px', // text-base `sm: ['14px', '20px']` to customize both `font-size` and `line-height`.
        'xs': '14px', // text-sm
        'xxs': '12px', // text-xs
      },
      fontWeight: {
        normal: 'normal', // font-normal
        bold: 'bold', // font-bold
      },
      screens: {
        sm: '375px',
      },
    },
  },
  plugins: [],
}
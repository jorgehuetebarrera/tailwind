/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'accent-light-red':'hsl(0, 100%, 67%)',
      'accent-orangey-yellow':'hsl(39, 100%, 56%)',
      'accent-green-teal':'hsl(166, 100%, 37%)',
      'accent-cobalt-blue':'hsl(234, 85%, 45%)',
      'light-slate-blue':'hsl(252, 100%, 67%)',
      'light-royal-blue':'hsl(241, 81%, 54%)',
      'violet-blue':'hsla(256, 72%, 46%, 1)',
      'persian-blue':'hsla(241, 72%, 46%, 0)',
      'white':'hsl(0, 0%, 100%)',
      'pale-blue':'hsl(221, 100%, 96%)',
      'light-lavender':'hsl(241, 100%, 89%)',
      'dark-gray-blue':'hsl(224, 30%, 27%)',
    },
    screens: {
      'sm':'600px'
    },
    extend: {
      fontFamily: {
        sans  : ['HankenGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


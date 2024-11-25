import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary-dark-blue': '#141959',
        'secondary-dark-blue': '#151fa6',
        'tertiary-dark-blue': '#444cb7',
        'primary-light-blue': '#6effff',
        'secondary-light-blue': '#0dffff',
        'tertiary-light-blue': '#cfffff',
        'primary-purple': '#3e1767',
        'secondary-purple': '#6316b4',
        'tertiary-purple': '#a173d2',
      }
    },
    
  },
  plugins: [],
}
export default config

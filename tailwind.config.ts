import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F231A5',
        secondary: '#3CD3C1',
        mainBg: '#06092B',
        lightBg: '#F2F2F2',
        white: '#FAFAFA',
        black: '#030517',
        lightGray: '#EAEAEA',
        gray: '#8F8F8F',
        darkGray: '#2E2F42',
        red: '#FF6347',
      },
    },
  },
  plugins: [],
};
export default config;

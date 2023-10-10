import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'sm-30': 'repeat(6, 60px)',
        'md-30': 'repeat(5, 80px)',
        'sm-36': 'repeat(6, 50px)',
        'md-36': 'repeat(6, 80px)',
      },
      gridTemplateColumns: {
        'sm-30': 'repeat(5, 60px)',
        'md-30': 'repeat(6, 80px)',
        'sm-36': 'repeat(6, 50px)',
        'md-36': 'repeat(6, 80px)',
      },
    },
  },
  plugins: [],
};
export default config;

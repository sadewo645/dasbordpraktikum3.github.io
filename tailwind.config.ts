import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        soil: {
          50: '#f6f7f4',
          100: '#e8efe3',
          700: '#386150',
          900: '#1d2d2b'
        }
      },
      boxShadow: {
        soft: '0 10px 35px rgba(21, 44, 35, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;

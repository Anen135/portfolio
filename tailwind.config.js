/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        winui: {
          bg: '#0b0e0f',
          bg2: '#111518',
          bg3: '#181e21',
          line: '#1e2529',
          muted: '#3d4d55',
          dim: '#6b7f8a',
          text: '#c8d8e0',
          bright: '#eaf4f8',
          green: '#3bffb0',
          'green-dim': 'rgba(59, 255, 176, 0.1)',
          'green-mid': 'rgba(59, 255, 176, 0.25)',
          amber: '#ffcc44',
          blue: '#44aaff',
        }
      },
      fontFamily: {
        'winui-ui': ['"Familjen Grotesk"', 'sans-serif'],
        'winui-code': ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        'winui': '6px',
      }
    },
  },
  plugins: [],
}

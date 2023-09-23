import defaultColors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...defaultColors,
			primary: '#1E1E1E',
			secondary: '#242424',
			tertiary: '#2D2D2D',
			quaternary: '#3C3C3C',
			accent: '#66e89a',
			text: '#FFFFFF',
			muted: '#A0AEC0',
			blue: '#8da7c9'
		},
		extend: {
			maxWidth: {
				custom: '1500px'
			},
			width: {
				200: '200px'
			},
			height: {
				300: '300px'
			},
			spacing: {
				center: 'calc(45vh - 212px)'
			}
		}
	},
	plugins: []
}

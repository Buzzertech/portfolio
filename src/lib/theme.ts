import { Theme } from 'styled-system';

const baseTheme: Theme = {
	breakpoints: ['414px', '768px', '1024px'],
	radii: {
		default: 12,
		circle: 1000
	},
	fonts: {
		body: 'Lato, sans-serif',
		heading: 'Arvo, serif',
		default: 'inherit'
	}
};

const lightTheme: Theme = {
	colors: {
		primary: '#2274a5',
		secondary: '#e9f1f7',
		background: '#e7dfc6',
		text: '#08090a'
	}
};

const darkTheme: Theme = {};

const theme = {
	light: Object.assign({}, baseTheme, lightTheme),
	dark: Object.assign({}, baseTheme, darkTheme)
};

export default theme;

import { Theme } from 'styled-system';
import elevation from 'css-elevation';

const baseTheme: Theme = {
	breakpoints: ['414px', '768px', '1024px'],
	radii: {
		default: 100,
		circle: 1000
	},
	fonts: {
		body: 'Lato, sans-serif',
		heading: 'Arvo, serif',
		default: 'inherit'
	},
	buttons: {
		primary: {
			borderRadius: 'default',
			color: 'plain',
			backgroundColor: 'primary',
			fontFamily: 'body',
			padding: '10px 25px',
			boxShadow: elevation({ z: 1 }),
			cursor: 'pointer'
		},
		secondary: {
			borderRadius: 'default',
			color: 'text',
			backgroundColor: 'secondary',
			fontFamily: 'body',
			padding: '10px 25px',
			boxShadow: elevation({ z: 1 }),
			cursor: 'pointer'
		}
	}
};

const lightTheme: Theme = {
	colors: {
		primary: '#2274a5',
		secondary: '#e9f1f7',
		background: '#e7dfc6',
		text: '#08090a',
		plain: 'white'
	}
};

const darkTheme: Theme = {};

const theme = {
	light: Object.assign({}, baseTheme, lightTheme),
	dark: Object.assign({}, baseTheme, darkTheme)
};

export default theme;

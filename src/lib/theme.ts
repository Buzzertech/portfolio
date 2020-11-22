import { Theme } from 'styled-system';
import elevation from 'css-elevation';

const baseTheme: Theme = {
	breakpoints: ['414px', '768px', '1024px'],
	radii: {
		default: 100,
		circle: 1000
	},
	fonts: {
		body: 'Poppins, sans-serif',
		heading: 'Poppins, sans-serif'
	},
	fontSizes: {
		body: '18px',
		heading: ['24px', '32px', '40px']
	},
	fontWeights: {
		body: 400,
		heading: 800,
		default: 400
	},
	space: {
		horizontalLink: ['10px', '15px']
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
		},
		text: {
			cursor: 'pointer',
			fontFamily: 'body',
			padding: 'horizontalLink',
			color: 'text',
			backgroundColor: 'transparent',
			textDecoration: 'underline'
		}
	}
};

const lightTheme: Theme = {
	colors: {
		primary: '#222222',
		secondary: '#e9f1f7',
		background: '#fff',
		text: '#222222',
		plain: 'white'
	}
};

const darkTheme: Theme = {};

const theme = {
	light: Object.assign({}, baseTheme, lightTheme),
	dark: Object.assign({}, baseTheme, darkTheme)
};

export default theme;

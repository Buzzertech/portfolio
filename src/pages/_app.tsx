import React from 'react';
import Head from 'next/head';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '../lib/theme';
import 'normalize.css';

const RootApp = ({ Component, pageProps }) => (
	<>
		<Head>
			<link
				href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap&text=buzzertech"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=family=Lato:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<ThemeProvider theme={theme.light}>
			<Box bg="background" color="text" minHeight="100vh">
				<Component {...pageProps} />
			</Box>
		</ThemeProvider>
	</>
);

export default RootApp;

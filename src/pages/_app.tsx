import React, { FC } from 'react';
import Head from 'next/head';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '../lib/theme';
import { AppProps } from 'next/app';
import 'normalize.css';
import { Router } from 'next/router';
import { pageview } from '../lib/analytics';

(async function () {
	if (window && typeof window.IntersectionObserver === 'undefined') {
		console.log('loading intersection-observer polyfill');
		// @ts-ignore
		await import('intersection-observer');
		console.log('loaded intersection-observer polyfill');
	}
})();

Router.events.on('routeChangeComplete', (url, _opts) => pageview(url));

const RootApp: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<meta
				content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=3.0,user-scalable=yes"
				name="viewport"
			/>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
				rel="stylesheet"
			/>
			<link rel="icon" href="/favicon.png" type="image/png" />
		</Head>
		<ThemeProvider theme={theme.light}>
			<Flex flexDirection="column" bg="background" color="text" minHeight="100vh">
				<Component {...pageProps} />
				<Box bg="primary" height={30} width="100%" sx={{ justifySelf: 'flex-end' }}></Box>
			</Flex>
		</ThemeProvider>
	</>
);

export default RootApp;

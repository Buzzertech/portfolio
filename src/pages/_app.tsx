import React, { FC } from 'react';
import Head from 'next/head';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '../lib/theme';
import 'normalize.css';
import Navbar from '../components/Navbar';
import { AppProps } from 'next/app';

const RootApp: FC<AppProps> = ({ Component, pageProps, router }) => (
	<>
		<Head>
			<link
				href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap&text=buzzertech"
				rel="stylesheet"
			/>
			<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
		</Head>
		<ThemeProvider theme={theme.light}>
			<Flex flexDirection="column" bg="background" color="text" minHeight="100vh">
				<Navbar hideLinks={router.pathname === '/'} />
				<Component {...pageProps} />
			</Flex>
		</ThemeProvider>
	</>
);

export default RootApp;

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
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap" rel="stylesheet" />
		</Head>
		<ThemeProvider theme={theme.light}>
			<Flex overflowY="auto" flexDirection="column" bg="background" color="text" width="100%" minHeight="100vh">
				<Component {...pageProps} />
			</Flex>
		</ThemeProvider>
	</>
);

export default RootApp;

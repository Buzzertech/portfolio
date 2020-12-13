import React, { FC } from 'react';
import Head from 'next/head';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '../lib/theme';
import { AppProps } from 'next/app';
import 'normalize.css';

const RootApp: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
				rel="stylesheet"
			/>
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

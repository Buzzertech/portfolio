import React from 'react';
import Head from 'next/head';
import { Flex, Heading, Box, Button, Text } from 'rebass';
import { constants } from '../lib/constants';
import RouteLink from '../components/RouteLink';
import PageContainer from '../components/PageContainer';

const IndexPage = () => (
	<>
		<Head>
			<title>Home | Buzzertech</title>
		</Head>
		<PageContainer justifyContent="center">
			<Heading letterSpacing={-1.5} fontSize="heading" color="text">
				bzr.
			</Heading>
			<Text my={10} fontFamily="body" fontWeight="body">
				{constants.HOMEPAGE_BIO}
			</Text>
			<Flex width="100%" sx={{ fontFamily: 'body', fontWeight: 'body', color: 'primary' }}>
				<RouteLink marginRight={5} href="/about">
					About
				</RouteLink>
				<RouteLink mx={5} href="/work">
					Work
				</RouteLink>
				<RouteLink marginLeft={5} href="/contact">
					Contact
				</RouteLink>
			</Flex>
		</PageContainer>
	</>
);

export default IndexPage;

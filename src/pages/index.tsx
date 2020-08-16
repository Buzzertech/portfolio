import React from 'react';
import Head from 'next/head';
import { Flex, Heading, Box, Button } from 'rebass';
import Link from 'next/link';

const IndexPage = () => (
	<>
		<Head>
			<title>Home | Buzzertech</title>
		</Head>
		<Flex flexDirection="column" alignItems="center" justifyContent="center" flex={1}>
			<Heading fontSize={[5, 6, 7]} color="text" sx={{ textDecoration: 'underline' }}>
				buzzertech
			</Heading>
			<Box my={10}>
				<Link href="/work">
					<Button mx={2} variant="primary">
						My work
					</Button>
				</Link>
				<Link href="/contact">
					<Button mx={2} variant="secondary">
						Contact
					</Button>
				</Link>
			</Box>
		</Flex>
	</>
);

export default IndexPage;

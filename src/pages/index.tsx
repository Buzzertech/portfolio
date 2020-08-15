import React from 'react';
import Head from 'next/head';
import { Flex, Heading } from 'rebass';
const IndexPage = () => (
	<>
		<Head>
			<title>Home | Buzzertech</title>
		</Head>
		<Flex flexDirection="column">
			<Heading>Buzzertech</Heading>
		</Flex>
	</>
);

export default IndexPage;

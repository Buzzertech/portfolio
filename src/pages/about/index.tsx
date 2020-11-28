import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Flex, Heading, Image, Text } from 'rebass';
import PageContainer from '../../components/PageContainer';
import Titlebar from '../../components/Titlebar';
import { constants } from '../../lib/constants';
import { client } from '../../lib/contentful';

type AboutPageDetails = {
	heading: string;
	description: string;
	profilePicture: {
		fields: {
			file: {
				url: string;
			};
		};
	};
	socialMediaLinks: Array<{ type: string; label: string; url: string }>;
};

const AboutPage: NextPage<AboutPageDetails> = ({
	heading,
	description,
	profilePicture: {
		fields: {
			file: { url: profilePicture }
		}
	}
}) => {
	return (
		<>
			<Head>
				<title>About | bzr</title>
			</Head>
			<Titlebar title={constants.ABOUT_PAGE_TITLE} />
			<PageContainer my={10}>
				<Flex
					width="100%"
					p={20}
					flexDirection={['column', 'column', 'row']}
					justifyContent={['center', 'center', 'inherit']}
					sx={{
						borderWidth: '1px',
						borderStyle: 'solid',
						borderColor: 'primary',
						gap: '20px'
					}}
				>
					<Image src={profilePicture} sx={{ objectFit: 'contain' }} minWidth={300} />
					<Box flex={1}>
						<Heading fontSize="heading" color="heading">
							{heading}
						</Heading>
						<Text my={10} fontFamily="body" fontSize={21} lineHeight={1.4} sx={{ whiteSpace: 'pre-line' }}>
							{description}
						</Text>
					</Box>
				</Flex>
			</PageContainer>
		</>
	);
};

export const getStaticProps = async () => {
	const { items } = await client.getEntries<AboutPageDetails>({
		content_type: 'aboutPage'
	});

	return {
		props: items[0].fields
	};
};

export default AboutPage;

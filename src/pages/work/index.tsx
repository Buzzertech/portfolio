import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Entry, EntryCollection } from 'contentful';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import PageContainer from '../../components/PageContainer';
import RouteLink from '../../components/RouteLink';
import Titlebar from '../../components/Titlebar';
import { client } from '../../lib/contentful';
import { constants } from '../../lib/constants';

type ResourceType = {
	id: string;
	name: string;
	description?: string;
};

const WorkLandingPage: NextPage<{ resourceTypes: Entry<ResourceType>[] }> = ({ resourceTypes }) => {
	return (
		<>
			<Head>
				<title>Work | Bzr</title>
			</Head>
			<Titlebar title={constants.WORK_LANDING_PAGE_TITLE} />
			<PageContainer my={15}>
				{resourceTypes.map(type => (
					<Box marginY={15} key={type.fields.id}>
						<RouteLink href={`/work/${type.fields.id}`}>
							<Flex sx={{ cursor: 'pointer', svg: { width: ['2em', '3em'] } }} alignItems="center">
								<Heading
									marginRight={20}
									fontSize={['2em', '2em', '4em']}
									sx={{ textTransform: 'lowercase', textDecoration: 'underline' }}
								>
									{type.fields.name}
								</Heading>
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</Flex>
						</RouteLink>
						{type.fields.description && (
							<Text my={[10, 30]} fontSize={['14px', '24px']} fontFamily="body">
								{type.fields.description}
							</Text>
						)}
					</Box>
				))}
			</PageContainer>
		</>
	);
};

export const getStaticProps = async () => {
	const { items } = await client.getEntries<ResourceType>({
		content_type: 'resourceType'
	});

	return {
		props: {
			resourceTypes: items
		},
		revalidate: 60
	};
};

export default WorkLandingPage;

import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Flex, Heading, Image, Text } from 'rebass';
import PageContainer from '../../../components/PageContainer';
import Breadcrumb from '../../../components/Portfolio/Breadcrumb';
import RouteLink from '../../../components/RouteLink';
import Tag from '../../../components/Tag';
import Titlebar from '../../../components/Titlebar';
import { client } from '../../../lib/contentful';

const WorkItemDetailPage: NextPage<PortfolioResource> = ({ id, type, name, labels, story, gallery, links }) => {
	return (
		<>
			<Head>
				<title>
					{name} | {type.fields.name} | bzr
				</title>
			</Head>
			<Titlebar title={type.fields.name as string} />
			<Breadcrumb
				px={[10, 30, 50]}
				width={'100%'}
				category={type.fields.id as PortfolioCategory}
				resourceId={id}
				resourceName={name}
			/>
			<PageContainer my={[30, 50]}>
				<Heading fontSize="heading" fontWeight="600">
					{name}
				</Heading>
				<Flex my={5} sx={{ gap: ['3px', '6px'] }} flexWrap="wrap">
					{labels.map(label => (
						<Tag fontSize={['12px', '16px']} fontFamily="body" fontWeight="600">
							{label}
						</Tag>
					))}
				</Flex>
				{story && (
					<Box my={15}>
						<Heading fontSize="body" fontWeight="400" color="secondary">
							Story
						</Heading>
						<Text my={10} sx={{ whiteSpace: 'pre-line' }} fontFamily="body">
							{story}
						</Text>
					</Box>
				)}
				{links && (
					<Box my={10}>
						<Heading my={5} fontSize="body" fontWeight="400" color="secondary">
							Links
						</Heading>
						<Box>
							{links.map(link => (
								<Box>
									{link.title && (
										<Heading fontSize="body" fontWeight="400" color="primary">
											{link.title}
										</Heading>
									)}
									<RouteLink target="_blank" rel="noopener" href={link.url} asAnchor>
										{link.url}
									</RouteLink>
								</Box>
							))}
						</Box>
					</Box>
				)}
				{gallery && (
					<Box my={10} width="100%">
						<Heading my={10} fontSize="body" fontWeight="400" color="secondary">
							Gallery
						</Heading>
						<Box
							display="grid"
							width="100%"
							sx={{
								gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 315px))',
								columnGap: ['20px', '50px'],
								rowGap: ['20px', '50px']
							}}
						>
							{gallery.map(image => (
								<Box minWidth={200} maxWidth={350}>
									<Image sx={{ objectFit: 'contain' }} src={image.fields.file.url} />
								</Box>
							))}
						</Box>
					</Box>
				)}
			</PageContainer>
		</>
	);
};

export const getStaticPaths = async () => {
	const { items } = await client.getEntries<{ id: string; type: { fields: { id: string } } }>({
		content_type: 'resource'
	});

	return {
		paths: items.map(item => ({
			params: {
				itemId: item.fields.id,
				category: item.fields.type.fields.id
			}
		})),
		fallback: false
	};
};

export const getStaticProps = async context => {
	const { itemId, category } = context.params;
	const { items } = await client.getEntries<PortfolioResource>({
		'content_type': 'resource',
		'fields.id': itemId
	});

	return {
		props: {
			...items[0].fields
		},
		revalidate: 60
	};
};

export default WorkItemDetailPage;

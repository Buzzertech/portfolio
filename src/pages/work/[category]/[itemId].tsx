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
import { useResourceDetails } from '../../../hooks/portfolio';

const WorkItemDetailPage: NextPage = () => {
	const { query } = useRouter();
	const resourceDetails = useResourceDetails(query.itemId as string);

	return (
		<>
			<Head>
				<title>
					{query.itemId} | {query.category} | bzr
				</title>
			</Head>
			<Titlebar title={query.category as string} />
			<PageContainer my={[30, 50]}>
				<Breadcrumb
					category={query.category as 'engineering' | 'design'}
					resourceId={query.itemId + ''}
					resourceName={resourceDetails?.name}
				/>
				<Heading fontSize="heading" fontWeight="600">
					{resourceDetails?.name}
				</Heading>
				<Flex my={5} sx={{ gap: ['3px', '6px'] }} flexWrap="wrap">
					{resourceDetails?.labels.map(label => (
						<Tag fontSize={['12px', '16px']} fontFamily="body" fontWeight="600">
							{label}
						</Tag>
					))}
				</Flex>
				{resourceDetails?.story && (
					<Box my={15}>
						<Heading fontSize="body" fontWeight="400" color="secondary">
							Story
						</Heading>
						<Text my={10} sx={{ whiteSpace: 'pre-line' }} fontFamily="body">
							{resourceDetails.story}
						</Text>
					</Box>
				)}
				{resourceDetails?.links && (
					<Box my={10}>
						<Heading my={5} fontSize="body" fontWeight="400" color="secondary">
							Links
						</Heading>
						<Box>
							{resourceDetails.links.map(link => (
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
				{resourceDetails?.gallery && (
					<Box my={10} width="100%">
						<Heading my={10} fontSize="body" fontWeight="400" color="secondary">
							Gallery
						</Heading>
						<Box
							display="grid"
							width="100%"
							sx={{
								gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 350px))',
								columnGap: ['20px', '50px'],
								rowGap: ['20px', '50px']
							}}
						>
							{resourceDetails.gallery.map(image => (
								<Box minWidth={200} maxWidth={350}>
									<Image sx={{ objectFit: 'contain' }} src={image.url} />
								</Box>
							))}
						</Box>
					</Box>
				)}
			</PageContainer>
		</>
	);
};

export default WorkItemDetailPage;

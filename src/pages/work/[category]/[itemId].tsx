import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import ImageViewer from '../../../components/ImageViewer';
import PageContainer from '../../../components/PageContainer';
import Breadcrumb from '../../../components/Portfolio/Breadcrumb';
import RouteLink from '../../../components/RouteLink';
import Tag from '../../../components/Tag';
import Titlebar from '../../../components/Titlebar';
import { client } from '../../../lib/contentful';
import ShimmerImage from '../../../components/ShimmerImage';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { event, EVENT_ACTIONS } from '../../../lib/analytics';

const IMAGE_ID_PATTERN = /\#imageId\=(.*)/i;

const WorkItemDetailPage: NextPage<PortfolioResource> = ({ id, type, name, labels, story, gallery, links }) => {
	const router = useRouter();
	const imageId = useMemo(
		() => (typeof window !== 'undefined' ? Number(location.hash.match(IMAGE_ID_PATTERN)?.[1]) : -1),
		[typeof location !== 'undefined' && location.hash]
	);

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
			{!!gallery?.length && gallery[imageId] && (
				<ImageViewer
					onClose={() => router.replace(location.pathname, undefined, { shallow: true })}
					imageSrc={gallery[imageId].fields.file.url}
					key={'image-viewer'}
				/>
			)}
			<PageContainer>
				<Heading fontSize="heading" fontWeight="800" width="100%" sx={{ overflowWrap: 'break-word' }}>
					{name}
				</Heading>
				<Flex my={5} sx={{ gap: ['3px', '6px'] }} flexWrap="wrap">
					{labels.map((label, index) => (
						<Tag
							key={`label_${label}_${index}`}
							fontSize={['12px', '16px']}
							fontFamily="body"
							fontWeight="600"
						>
							{label}
						</Tag>
					))}
				</Flex>
				{story && (
					<Box my={15}>
						<Heading fontSize="body" fontWeight="600">
							Story
						</Heading>
						<Text my={10} sx={{ whiteSpace: 'pre-line' }} fontFamily="body">
							{story}
						</Text>
					</Box>
				)}
				{!!links?.length && (
					<Box my={10}>
						<Heading my={10} fontSize="body" fontWeight="600">
							Links
						</Heading>
						<Box>
							{links.map(link => (
								<Box my={15}>
									{link.title && (
										<Heading my={5} fontSize="body" fontWeight="400" color="primary">
											{link.title}
										</Heading>
									)}
									<RouteLink
										fontSize="body"
										sx={{ fontFamily: 'body' }}
										target="_blank"
										rel="noopener"
										href={link.url}
										onClick={() =>
											event({
												action: EVENT_ACTIONS.CLICK_PORTFOLIO_LINK_ITEM,
												category: `${type.fields.name}, ${name}`,
												label: link.url
											})
										}
										asAnchor
									>
										{link.url}
									</RouteLink>
								</Box>
							))}
						</Box>
					</Box>
				)}
				{!!gallery?.length && (
					<Box my={10} width="100%">
						<Heading my={10} fontSize="body" fontWeight="600">
							Gallery
						</Heading>
						<Box
							display="grid"
							width="100%"
							sx={{
								gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 315px))',
								gridColumnGap: ['20px', '50px'],
								gridRowGap: ['20px', '50px'],
								justifyContent: ['center', 'flex-start']
							}}
						>
							{gallery.map((image, index) => (
								<Box
									minWidth={200}
									maxWidth={350}
									key={image.sys.id}
									onClick={() =>
										event({
											action: EVENT_ACTIONS.VIEW_GALLERY_ITEM,
											category: `${type.fields.name}, ${name}`,
											label: image.fields.file.url
										})
									}
								>
									<Link
										href={`${
											typeof location !== 'undefined' && location.pathname
										}#imageId=${index}`}
										shallow
										scroll={false}
									>
										<a>
											<ShimmerImage
												shimmerHeight={200}
												shimmerWidth={350}
												sx={{ objectFit: 'contain', cursor: 'zoom-in' }}
												src={image.fields.file.url}
											/>
										</a>
									</Link>
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

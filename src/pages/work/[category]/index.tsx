import { Entry, EntryCollection } from 'contentful';
import { NextComponentType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box } from 'rebass';
import PageContainer from '../../../components/PageContainer';
import Breadcrumb from '../../../components/Portfolio/Breadcrumb';
import PortfolioItemBox from '../../../components/Portfolio/PortfolioItemBox';
import RouteLink from '../../../components/RouteLink';
import Titlebar from '../../../components/Titlebar';
import { client } from '../../../lib/contentful';

const WorkListingPage: NextComponentType<
	{ query: { category: PortfolioCategory } },
	{},
	{ items: Entry<PortfolioResource>[] }
> = ({ items }) => {
	const { query } = useRouter();

	return (
		<>
			<Head>
				<title>{query.category || ''} | bzr</title>
			</Head>
			<Titlebar title={(query.category as string) || ''} />
			<PageContainer my={2}>
				<Breadcrumb category={query.category as PortfolioCategory} />
				<Box
					my={[20, 20, 50]}
					display="grid"
					width="100%"
					sx={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 350px))',
						columnGap: ['20px', '20px', '50px'],
						rowGap: ['20px', '20px', '50px']
					}}
				>
					{items.map(({ fields: item }) => (
						<RouteLink href={`/work/${item.type.fields.id}/${item.id}`} key={item.id}>
							<PortfolioItemBox {...item} />
						</RouteLink>
					))}
				</Box>
			</PageContainer>
		</>
	);
};

export const getStaticPaths = async () => {
	const { items, errors } = await client.getEntries<{ id: string }>({
		content_type: 'resourceType'
	});

	return {
		paths: items.map(item => ({
			params: {
				category: item.fields.id
			}
		})),
		fallback: false
	};
};

export const getStaticProps = async context => {
	const { category } = context.params;
	const { items, errors } = await client.getEntries<PortfolioResource>({
		'content_type': 'resource',
		'fields.type.sys.contentType.sys.id': 'resourceType',
		'fields.type.fields.id': category
	});

	return {
		props: {
			items: items || []
		},
		revalidate: 60
	};
};
export default WorkListingPage;

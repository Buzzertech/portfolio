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
import { client } from '../../../hooks/portfolio';

const items = [
	{
		id: 'brawadis-2016',
		name: 'Brawadis',
		isPinned: true,
		labels: ['Banner', 'Profile picture']
	},
	{
		id: 'mrbeast',
		name: 'MrBeast',
		isPinned: true,
		labels: ['Banner', 'Profile picture', 'twitter header']
	},
	{
		id: 'carryminati-2016',
		name: 'Carryminati',
		isPinned: true,
		labels: ['Banner', 'Profile picture']
	},
	{
		id: 'serum-2017',
		name: 'Serum',
		isPinned: false,
		labels: ['Banner', 'Profile picture']
	}
];

const WorkListingPage: NextComponentType<
	{ query: { category: PortfolioCategory } },
	{},
	{ items: Entry<PortfolioResource>[]; errors: any[] | undefined }
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
						<RouteLink href={`/work/${item.type}/${item.id}`} key={item.id}>
							<PortfolioItemBox {...item} />
						</RouteLink>
					))}
				</Box>
			</PageContainer>
		</>
	);
};

export const getInitialProps = async context => {
	const { category } = context.query;
	const { items, errors } = await client.getEntries<PortfolioResource>({
		'content_type': 'resource',
		'field.type.id': category
	});

	return {
		items,
		errors
	};
};
export default WorkListingPage;

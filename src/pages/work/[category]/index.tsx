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

const WorkListingPage: NextComponentType = ({}) => {
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
					{items.map(item => (
						<RouteLink href={`/work/${query.category}/${item.id}`} key={item.id}>
							<PortfolioItemBox {...item} />
						</RouteLink>
					))}
				</Box>
			</PageContainer>
		</>
	);
};

export default WorkListingPage;

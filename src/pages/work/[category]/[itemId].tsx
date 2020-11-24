import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Heading } from 'rebass';
import PageContainer from '../../../components/PageContainer';
import Breadcrumb from '../../../components/Portfolio/Breadcrumb';
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
			<PageContainer>
				<Breadcrumb
					category={query.category as 'engineering' | 'design'}
					resourceId={query.itemId + ''}
					resourceName={resourceDetails?.name}
				/>
				<Heading fontSize="heading" fontWeight="600">
					{resourceDetails?.name}
				</Heading>
			</PageContainer>
		</>
	);
};

export default WorkItemDetailPage;

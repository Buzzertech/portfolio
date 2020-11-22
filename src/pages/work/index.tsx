import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import PageContainer from '../../components/PageContainer';
import RouteLink from '../../components/RouteLink';
import Titlebar from '../../components/Titlebar';
import { constants } from '../../lib/constants';

const WorkLandingPage = () => {
	return (
		<>
			<Head>
				<title>Work | Bzr</title>
			</Head>
			<Titlebar title={constants.WORK_LANDING_PAGE_TITLE} />
			<PageContainer>
				<Box marginTop={[30, 50, 130]}>
					<RouteLink href="/work/engineering">
						<Flex sx={{ cursor: 'pointer', svg: { width: ['2em', '3em'] } }} alignItems="center">
							<Heading
								marginRight={20}
								fontSize={['2em', '2em', '4em']}
								sx={{ textTransform: 'lowercase', textDecoration: 'underline' }}
							>
								{constants.WORK_ENGINEERING_TITLE}
							</Heading>
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</Flex>
					</RouteLink>
					<Text my={30} fontSize={['14px', '24px']} fontFamily="body">
						{constants.WORK_ENGINEERING_SUBTEXT}
					</Text>
				</Box>

				<Box marginTop={30}>
					<RouteLink href="/work/design">
						<Flex sx={{ cursor: 'pointer', svg: { width: ['2em', '3em'] } }} alignItems="center">
							<Heading
								marginRight={20}
								fontSize={['2em', '2em', '4em']}
								sx={{ textTransform: 'lowercase', textDecoration: 'underline' }}
							>
								{constants.WORK_DESIGN_TITLE}
							</Heading>
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</Flex>
					</RouteLink>
					<Text my={30} fontSize={['14px', '24px']} fontFamily="body">
						{constants.WORK_DESIGN_SUBTEXT}
					</Text>
				</Box>
			</PageContainer>
		</>
	);
};

export default WorkLandingPage;

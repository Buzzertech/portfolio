import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Heading } from 'rebass';
import PageContainer from '../../components/PageContainer';
import Tile from '../../components/Tile';
import Titlebar from '../../components/Titlebar';
import { constants } from '../../lib/constants';
import { client } from '../../lib/contentful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'emotion-theming';

const iconsMap = {
	instagram: faInstagram,
	email: faEnvelope,
	twitter: faTwitter,
	linkedin: faLinkedin,
	youtube: faYoutube,
	github: faGithub,
	other: faQuestion
};

type SocialHandle = {
	type: string;
	name: string;
	link: string;
};

type ContactPageDetails = {
	socialHandles: Array<SocialHandle>;
};

const ContactPage: NextPage<ContactPageDetails> = ({ socialHandles }) => {
	const { colors } = useTheme();

	return (
		<>
			<Head>
				<title>Contact | bzr</title>
			</Head>
			<Titlebar title={constants.CONTACT_PAGE_TITLE} />
			<PageContainer my={10}>
				<Heading my={10} fontSize="heading" color="primary">
					Find me here
				</Heading>
				<Box
					display="grid"
					width="100%"
					sx={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
						gridColumnGap: ['20px', '50px'],
						gridRowGap: ['20px', '50px']
					}}
				>
					{socialHandles.map(({ name, link, type }) => (
						<Tile minHeight={100} key={name} target={'_blank'} asAnchor href={link}>
							<FontAwesomeIcon width="3em" color={colors.primary} icon={iconsMap[type]} />
							<Heading
								fontSize={[24, 32, 40]}
								color="primary"
								flex={1}
								sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
								title={name}
							>
								{name}
							</Heading>
						</Tile>
					))}
				</Box>
			</PageContainer>
		</>
	);
};

export const getStaticProps = async () => {
	const { items } = await client.getEntries<SocialHandle>({
		content_type: 'socialHandle'
	});

	return {
		props: {
			socialHandles: items.map(item => item.fields)
		},
		revalidate: 60
	};
};

export default ContactPage;

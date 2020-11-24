import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Flex, Text } from 'rebass';
import RouteLink from '../RouteLink';

type BreadcrumbProps = {
	category: 'design' | 'engineering';
	resourceName: string | undefined;
	resourceId: string | undefined;
};

const Breadcrumb: FC<BreadcrumbProps> = ({ category, resourceId, resourceName }) => {
	return (
		<Flex
			color="breadcrumb"
			sx={{}}
			sx={{ 'textTransform': 'capitalize', '*': { mx: '5px' }, 'fontFamily': 'body' }}
			width={['100%', 400]}
			alignItems="center"
		>
			<RouteLink href={'/work'} asAnchor>
				Work
			</RouteLink>
			<FontAwesomeIcon width={8} icon={faChevronRight} />
			<RouteLink href={`/work/${category}`} asAnchor>
				{category}
			</RouteLink>
			{resourceId && (
				<>
					<FontAwesomeIcon width={8} icon={faChevronRight} />
					<RouteLink href={`/work/${category}/${resourceId}`} asAnchor>
						{resourceName}
					</RouteLink>
				</>
			)}
		</Flex>
	);
};

export default Breadcrumb;

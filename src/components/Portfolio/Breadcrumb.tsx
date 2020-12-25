import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';
import RouteLink from '../RouteLink';

type BreadcrumbProps = {
	category: PortfolioCategory;
	resourceName?: string | undefined;
	resourceId?: string | undefined;
};

const Breadcrumb: FC<BreadcrumbProps & FlexProps> = ({ category, resourceId, resourceName, ...props }) => {
	return (
		<Flex
			color="primary"
			py={10}
			sx={{
				'textTransform': 'capitalize',
				'*': { mx: '5px' },
				'fontFamily': 'body'
			}}
			width={'100%'}
			bg="background"
			alignItems="center"
			flexWrap="wrap"
			{...props}
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
					{resourceName}
				</>
			)}
		</Flex>
	);
};

export default Breadcrumb;

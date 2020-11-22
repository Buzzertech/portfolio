import React, { FC } from 'react';
import Link from 'next/link';
import { Link as LinkComponent, LinkProps } from 'rebass';

const RouteLink: FC<LinkProps> = ({ href, ...props }) => {
	return (
		<Link href={href as string}>
			<LinkComponent {...props} />
		</Link>
	);
};

export default RouteLink;

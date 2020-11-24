import React, { FC } from 'react';
import Link from 'next/link';
import { Link as LinkComponent, LinkProps } from 'rebass';

const RouteLink: FC<LinkProps & { asAnchor?: boolean }> = ({ href, asAnchor, ...props }) => {
	return (
		<Link href={href as string}>
			<LinkComponent href={(asAnchor && href) || undefined} {...props} />
		</Link>
	);
};

export default RouteLink;

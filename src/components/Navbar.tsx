import React, { FC } from 'react';
import { Flex, FlexProps, Heading } from 'rebass';
import RouteLink from './RouteLink';

const Navbar: FC<{ title?: string | false } & Omit<FlexProps, 'title' | 'children'>> = ({ title, ...props }) => (
	<Flex
		px={[10, 30, 50]}
		py={10}
		alignItems="center"
		minHeight={[50, 70]}
		bg="background"
		{...props}
		overflowY="hidden"
	>
		<RouteLink href="/" sx={{ cursor: 'pointer' }}>
			<Heading letterSpacing={-1.5} fontSize={[24, 32, 40]} color="text">
				bzr.
			</Heading>
		</RouteLink>
		<Heading
			mx={2}
			letterSpacing={1}
			fontSize={[24, 32, 40]}
			color="secondary"
			sx={{
				textTransform: 'lowercase',
				position: 'relative',
				willChange: 'transform',
				transform: `translateY(${!!title ? '0%' : '150%'})`,
				transition: 'transform .2s ease-in-out'
			}}
		>
			{title}
		</Heading>
	</Flex>
);

export default Navbar;

import React, { FC } from 'react';
import { Box, Flex, FlexProps, Heading } from 'rebass';
import RouteLink from './RouteLink';

const Navbar: FC<{ title: string | false; displayTitle: boolean } & Omit<FlexProps, 'title' | 'children'>> = ({
	title,
	displayTitle,
	...props
}) => (
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
				position: 'relative',
				willChange: 'transform',
				transform: `translateY(${displayTitle ? '0%' : '150%'})`,
				transition: 'transform .2s ease-in-out'
			}}
		>
			{title}
		</Heading>
	</Flex>
);

export default Navbar;

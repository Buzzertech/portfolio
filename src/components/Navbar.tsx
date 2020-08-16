import React, { FC } from 'react';
import { Flex, Image, Box, Link } from 'rebass';

const Navbar: FC<{ hideLinks?: boolean }> = ({ hideLinks }) => (
	<Flex alignItems="center">
		<Image src={'/logo.png'} width={['50px', '100px']} />
		<Box mx="auto" />
		{!hideLinks && (
			<Box>
				<Link mx={10} href="/work">
					Work
				</Link>
				<Link mx={10} href="/contact">
					Contact
				</Link>
			</Box>
		)}
	</Flex>
);

export default Navbar;

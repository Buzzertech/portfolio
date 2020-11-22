import React, { FC } from 'react';
import { Flex, Heading } from 'rebass';

const Navbar: FC<{ hideLinks?: boolean }> = ({ hideLinks }) => (
	<Flex px={[10, 30, 50]} alignItems="center" height={[50, 100]}>
		<Heading letterSpacing={-1.5} fontSize="heading" color="text">
			bzr.
		</Heading>
	</Flex>
);

export default Navbar;

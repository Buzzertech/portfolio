import React, { FC } from 'react';
import { Box, Flex, Heading } from 'rebass';

const Navbar: FC<{ title?: string | false }> = ({ title }) => (
	<Flex px={[10, 30, 50]} alignItems="center" height={[50, 100]}>
		<Heading letterSpacing={-1.5} fontSize="heading" color="text">
			bzr.
		</Heading>
		{!!title && (
			<>
				<Box bg="primary" width="3px" height="100%" />
				<Heading letterSpacing={-1.5} fontSize="heading" color="secondary">
					{title}
				</Heading>
			</>
		)}
	</Flex>
);

export default Navbar;

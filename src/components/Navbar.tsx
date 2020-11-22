import React, { FC } from 'react';
import Link from 'next/link';
import { Flex, Image, Button } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar: FC<{ hideLinks?: boolean }> = ({ hideLinks }) => (
	<Flex alignItems="center" height={[50, 100]}>
		<Image src={'/logo.png'} sx={{ filter: 'invert(.8)' }} width={['50px', '100px']} />
		{!hideLinks && (
			<Flex flex="1" justifyContent="flex-end">
				<Link href="/work">
					<Button variant="text">Work</Button>
				</Link>
				<Link href="/contact">
					<Button variant="text">Contact</Button>
				</Link>
				<a href="https://github.com/buzzertech" target="_blank">
					<Button variant="text">
						<FontAwesomeIcon icon={faGithub} />
					</Button>
				</a>
			</Flex>
		)}
	</Flex>
);

export default Navbar;

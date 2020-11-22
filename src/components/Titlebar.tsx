import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heading } from 'rebass';
import Navbar from './Navbar';

const Titlebar: FC<{ title: string }> = ({ title }) => {
	const { ref, inView } = useInView({
		threshold: 1
	});

	return (
		<>
			<Navbar title={!inView && title} />
			<Heading
				fontSize={['3em', '5em', '8em']}
				letterSpacing={15}
				sx={{ textTransform: 'lowercase' }}
				color="secondary"
				px={[10, 30, 50]}
				ref={ref}
			>
				{title}
			</Heading>
		</>
	);
};

export default Titlebar;

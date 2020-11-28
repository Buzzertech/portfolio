import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heading } from 'rebass';
import Navbar from './Navbar';

const Titlebar: FC<{ title: string }> = ({ title }) => {
	const { ref, inView, entry } = useInView({
		threshold: 0.5
	});

	return (
		<>
			<Navbar
				displayTitle={!(inView && entry?.target)}
				title={title}
				sx={{
					position: 'sticky',
					top: '0px',
					borderBottomWidth: '1px',
					borderBottomColor: 'secondary',
					borderBottomStyle: 'solid'
				}}
			/>
			<Heading
				fontSize={['3em', '5em', '8em']}
				letterSpacing={15}
				color="secondary"
				px={[10, 30, 50]}
				sx={{ textTransform: 'lowercase', wordBreak: 'break-word' }}
				ref={ref}
			>
				{title}
			</Heading>
		</>
	);
};

export default Titlebar;

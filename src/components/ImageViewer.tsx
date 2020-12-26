import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import { Box, Button, Flex, Image } from 'rebass';
import dynamic from 'next/dynamic';

type ImageViewerProps = {
	imageSrc: string;
	onClose?: () => void;
};

const Container = styled(Flex)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	z-index: 2;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 10px;
	cursor: zoom-out;
`;

const ImageViewer: FC<ImageViewerProps> = ({ imageSrc, onClose }) => {
	useEffect(() => {
		const keyUpCb = (e: KeyboardEvent) => e.key === 'Escape' && onClose && onClose();
		document.addEventListener('keyup', keyUpCb);
		return () => document.removeEventListener('keyup', keyUpCb);
	}, [imageSrc, onClose]);

	return (
		<Container
			id="image-viewer"
			onClick={(event: any) => event.target.id === 'image-viewer' && onClose && onClose()}
		>
			<Button
				sx={{ position: 'absolute', width: '18px', top: '10px', right: '15px', boxShadow: 'none' }}
				backgroundColor="transparent"
				onClick={() => onClose && onClose()}
			>
				<FontAwesomeIcon icon={faTimes} size="1x" style={{ width: '18px' }} color="white" />
			</Button>
			<Box sx={{ transform: 'scale(.8)', cursor: 'initial' }}>
				<Image sx={{ objectFit: 'contain' }} src={imageSrc} />
			</Box>
		</Container>
	);
};

export default dynamic(async () => ImageViewer, { ssr: false });

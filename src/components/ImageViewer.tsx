import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import { Box, Button, Flex, Image } from 'rebass';

type ImageViewerProps = {
	imageSrc: string;
	onClose?: () => void;
};

const ImageViewer: FC<ImageViewerProps> = ({ imageSrc, onClose }) => {
	useEffect(() => {
		const keyUpCb = (e: KeyboardEvent) => e.key === 'Escape' && onClose && onClose();
		const hashchangeCb = _ => location.hash !== '#expand' && onClose && onClose();

		document.addEventListener('keyup', keyUpCb);
		window.addEventListener('hashchange', hashchangeCb);
		return () => {
			document.removeEventListener('keyup', keyUpCb);
			window.removeEventListener('hashchange', hashchangeCb);
		};
	}, [imageSrc, onClose]);

	return (
		<Flex
			sx={{
				cursor: 'zoom-out',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				background: 'rgba(0,0,0,.8)',
				backdropFilter: 'blur(10px) grayscale(100%)',
				zIndex: 2
			}}
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
			id="image-viewer"
			onClick={(event: any) => event.target.id === 'image-viewer' && onClose && onClose()}
			p={[10, 100]}
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
		</Flex>
	);
};

export default ImageViewer;

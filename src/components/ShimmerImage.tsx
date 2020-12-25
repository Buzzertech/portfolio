import React, { FC, useEffect, useState } from 'react';
import { Image, ImageProps } from 'rebass';
import Shimmer from './Shimmer';

const ShimmerImage: FC<ImageProps & { shimmerWidth: string | number; shimmerHeight: string | number }> = ({
	shimmerHeight,
	shimmerWidth,
	...props
}) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		if (!isImageLoaded && props.src) {
			const img = new window.Image();
			img.onload = () => setIsImageLoaded(true);
			img.src = props.src;
		}
	}, [isImageLoaded, setIsImageLoaded, props.src]);

	return <>{isImageLoaded ? <Image {...props} /> : <Shimmer width={shimmerWidth} height={shimmerHeight} />}</>;
};

export default ShimmerImage;

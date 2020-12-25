import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

type ShimmerProps = {
	width: string | number;
	height: string | number;
};

const Shimmer: FC<ShimmerProps> = ({ width, height }) => {
	return (
		<ContentLoader
			speed={2}
			width={'100%'}
			height={'100%'}
			backgroundColor="rgba(0,0,0,.05)"
			foregroundColor="rgba(0,0,0,.12)"
			viewBox={`0 0 ${width} ${height}`}
		>
			<rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
		</ContentLoader>
	);
};

export default Shimmer;

import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

const PageContainer: FC<FlexProps> = props => (
	<Flex flexDirection="column" px={[10, 30, 50]} alignItems="flex-start" flex={1} {...props} />
);

export default PageContainer;

import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Flex, Heading, Text } from 'rebass';

type PortfolioItemBoxProps = {
	isPinned: boolean;
	name: string;
	labels: Array<string>;
};

const PortfolioItemBox: FC<PortfolioItemBoxProps> = ({ name, isPinned, labels }) => (
	<Flex
		width={'100%'}
		flexDirection="column"
		px={16}
		py={25}
		sx={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'primary', cursor: 'pointer' }}
	>
		<Flex justifyContent="space-between" color="secondary">
			<Heading
				fontSize={[24, 32, 40]}
				fontWeight="600"
				color="primary"
				flex={1}
				sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
			>
				{name}
			</Heading>
			{isPinned && (
				<FontAwesomeIcon
					width="1em"
					icon={faThumbtack}
					style={{ transform: 'rotate(45deg)' }}
					title="Pinned item"
				/>
			)}
		</Flex>
		<Flex>
			<Text fontStyle="body" color="subText" fontFamily="body">
				{labels.join(', ')}
			</Text>
		</Flex>
	</Flex>
);

export default PortfolioItemBox;

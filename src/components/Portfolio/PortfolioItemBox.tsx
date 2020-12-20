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
		minHeight={120}
		justifyContent="space-between"
		sx={{ borderWidth: '3px', borderStyle: 'solid', borderColor: 'primary', cursor: 'pointer' }}
	>
		<Flex justifyContent="space-between" color="secondary">
			<Heading
				fontSize={[24, 32, 40]}
				color="primary"
				flex={1}
				sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
				title={name}
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
			<Text
				fontStyle="body"
				color="subText"
				fontFamily="body"
				sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
			>
				{labels.join(', ')}
			</Text>
		</Flex>
	</Flex>
);

export default PortfolioItemBox;

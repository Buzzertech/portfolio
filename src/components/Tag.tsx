import React from 'react';
import styled from '@emotion/styled';
import { Text } from 'rebass';

const Tag = styled(Text)<{}, any>`
	border-radius: 25px;
	background: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.primary};
	padding: 6px 18px;
	text-transform: uppercase;
`;

export default Tag;

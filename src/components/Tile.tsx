import styled from '@emotion/styled';
import React from 'react';
import RouteLink from './RouteLink';

const Tile = styled(RouteLink)<{}, any>`
	width: 100%;
	display: flex;
	padding: 25px 16px;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	border: 3px solid ${props => props.theme.colors.primary};
`;

export default Tile;

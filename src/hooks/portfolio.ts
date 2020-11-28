import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { config } from '../lib/constants';

export const client = createClient({
	accessToken: config.contentful.accessToken,
	space: config.contentful.spaceId
});

export const useResourceDetails = (resourceId: string) => {
	const [state, setState] = useState<PortfolioResource | null>(null);

	return state;
};

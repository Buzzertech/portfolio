import { useEffect, useState } from 'react';

export const useResourceDetails = (resourceId: string) => {
	const [state, setState] = useState<PortfolioResource | null>(null);

	useEffect(() => {
		setState({
			id: resourceId,
			name: 'Brawadis'
		});
	}, [resourceId]);

	return state;
};

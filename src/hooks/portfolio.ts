import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { config } from '../lib/constants';

export const client = createClient({
	accessToken: config.contentful.accessToken,
	space: config.contentful.spaceId
});

export const useResourceDetails = (resourceId: string) => {
	const [state, setState] = useState<PortfolioResource | null>(null);

	useEffect(() => {
		setState({
			id: resourceId,
			name: 'Brawadis',
			labels: ['YouTube', 'Banner', 'Profile picture'],
			gallery: [
				{
					url: 'https://placehold.it/640x360'
				},
				{
					url: 'https://placehold.it/1000'
				}
			],
			links: [
				{
					url: 'https://twitter.com/buzzertechyt',
					title: 'Twitter - Buzzertech'
				}
			],
			story: `Itaque deleniti illum id doloremque consequatur sunt voluptas officia. In recusandae ut ut magni ut et. Vitae nihil assumenda quasi aspernatur facere non. Sint et voluptatem tempore nemo magni minus sed. Eos qui id quo quia consequatur.

			Et accusamus voluptas iusto. Quo et saepe ut adipisci. Nemo doloremque eum quia tempore omnis tempora ut. Rerum minima est optio maiores. Veritatis dolor incidunt provident.

			Laboriosam et sequi dolorem quaerat autem voluptas. Consequuntur exercitationem error aspernatur vel excepturi. Tempora quis ea consectetur. Quia magni ut officia adipisci facere a et. Possimus velit ad quo aperiam cupiditate.

			Ut esse quaerat dicta et omnis odio. Veritatis harum atque enim exercitationem quo iusto aliquam nulla. Molestias numquam reprehenderit fugiat non. Possimus et a earum ut.

			Velit distinctio sit autem quis asperiores reiciendis molestiae illum. Quidem quia odit quos dignissimos eos neque. Dicta consequuntur soluta nam similique impedit ut unde. Assumenda provident possimus est recusandae asperiores. Sit est quibusdam earum et vero maxime possimus enim.`
		});
	}, [resourceId]);

	return state;
};

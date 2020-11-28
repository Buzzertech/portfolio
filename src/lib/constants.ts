export enum constants {
	HOMEPAGE_BIO = 'Experienced fullstack developer and systems design enthusiast.',
	WORK_LANDING_PAGE_TITLE = 'Work',
	WORK_ENGINEERING_TITLE = 'Engineering',
	WORK_DESIGN_TITLE = 'Design',
	WORK_ENGINEERING_SUBTEXT = 'Disclaimer: You are about to witness some serious, kickass tech',
	WORK_DESIGN_SUBTEXT = 'Fresh, hot dzns right at your doorstep'
}

export const config = {
	contentful: {
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
		spaceId: process.env.CONTENTFUL_SPACE_ID || ''
	}
};

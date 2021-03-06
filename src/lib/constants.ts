export enum constants {
	HOMEPAGE_BIO = 'Software developer, graphic designer, systems design enthusiast.',
	WORK_LANDING_PAGE_TITLE = 'Work',
	ABOUT_PAGE_TITLE = 'About',
	CONTACT_PAGE_TITLE = 'Contact'
}

export const config = {
	contentful: {
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
		spaceId: process.env.CONTENTFUL_SPACE_ID || ''
	},
	analytics: {
		trackingId: process.env.GA_TRACKING_ID || ''
	}
};

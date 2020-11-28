export enum constants {
	HOMEPAGE_BIO = 'Experienced fullstack developer and systems design enthusiast.',
	WORK_LANDING_PAGE_TITLE = 'Work',
	ABOUT_PAGE_TITLE = 'About',
	CONTACT_PAGE_TITLE = 'Contact'
}

export const config = {
	contentful: {
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
		spaceId: process.env.CONTENTFUL_SPACE_ID || ''
	}
};

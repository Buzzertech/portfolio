/// <reference types="next" />
/// <reference types="next/types/global" />

type PortfolioResource = {
	id: string;
	isPinned: boolean;
	type: { fields: { id: PortfolioCategory; name: string } };
	name: string;
	labels: Array<string>;
	story?: string;
	links?: Array<{ title?: string; url: string }>;
	gallery?: Array<{ fields: { file: { url: string } } }>;
};

const enum PortfolioCategory {
	DESIGN = 'design',
	ENGINEERING = 'engineering'
}

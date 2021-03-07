import { config } from './constants';

export const pageview = (url: URL) => {
	window.gtag('config', config.analytics.trackingId, {
		page_path: url
	});
};

export enum EVENT_ACTIONS {
	VIEW_GALLERY_ITEM = 'view_gallery_item',
	CLICK_CONTACT_ITEM = 'click_contact_item',
	CLICK_PORTFOLIO_LINK_ITEM = 'click_portfolio_link_item'
}

type GTagEvent = {
	action: EVENT_ACTIONS;
	category: string;
	label?: string;
	value?: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};

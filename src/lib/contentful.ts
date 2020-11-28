import { createClient } from 'contentful';
import { config } from './constants';

export const client = createClient({
	accessToken: config.contentful.accessToken,
	space: config.contentful.spaceId
});

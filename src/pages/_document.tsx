import Document, { Html, Head, Main, NextScript } from 'next/document';
import { config } from '../lib/constants';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.trackingId}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.analytics.trackingId}', {
                page_path: window.location.pathname,
              });
          `
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

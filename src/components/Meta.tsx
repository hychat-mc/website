import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

const metaConfig = {
	title: "Easily create your Hypixel guild's new chat bot.", // eslint-disable-line quotes
	description: 'Expand your community with a guild chat bridge.',
	url: 'https://hych.at',
	siteName: 'Hychat',
};

export const Meta = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				{/* <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${router.basePath}/favicon-32x32.png`}
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${router.basePath}/favicon-16x16.png`}
					key="icon16"
				/> */}
				<link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
			</Head>
			<NextSeo
				title={`${metaConfig.title} - ${metaConfig.description}`}
				description={metaConfig.description}
				canonical={metaConfig.url}
				openGraph={{
					title: metaConfig.title,
					description: metaConfig.description,
					url: metaConfig.url,
					site_name: metaConfig.siteName,
				}}
				twitter={{
					handle: '@hychatmc',
					site: '@hychatmc',
					cardType: 'summary_large_image',
				}}
			/>
		</>
	);
};

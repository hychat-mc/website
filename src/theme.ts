import { extendTheme } from '@chakra-ui/react';

const fonts = { heading: 'Inter', body: 'Inter', base: 'Inter' };

const theme = extendTheme({
	colors: {
		gray: {
			200: '#4F4F4F',
			900: '#181818',
		},
		green: {
			200: '#00E18F',
			300: '#00C67E',
			400: '#009861',
		},
		fonts,
		styles: {
			global: {
				'html, body': {
					fontFamily: 'body',
					bg: 'gray.900',
					background: 'gray.900',
					backgroundColor: 'gray.900',
					color: 'gray.900',
				},
			},
		},
	},
});

export default theme;

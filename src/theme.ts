import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const styles = {
	global: {
		body: {
			fontFamily: 'body',
			bg: 'gray.900',
		},
	},
};

const colors = {
	gray: {
		200: '#4F4F4F',
		800: '#1E1E1E',
		900: '#181818',
	},
	green: {
		200: '#00E18F',
		300: '#00C67E',
		400: '#009861',
	},
};

const theme = extendTheme({
	config,
	styles,
	colors,
});

export default theme;

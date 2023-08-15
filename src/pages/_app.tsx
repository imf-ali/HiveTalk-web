import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { AppProps } from 'next/app';
import { Client, cacheExchange, fetchExchange, Provider } from 'urql';

const client = new Client({
	url: 'http://localhost:4000/graphql',
	exchanges: [cacheExchange, fetchExchange],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider value={client}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;

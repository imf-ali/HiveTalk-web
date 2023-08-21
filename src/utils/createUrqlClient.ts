import { cacheExchange, fetchExchange } from 'urql';

export const createUrqlClient = (ssrExchange: any) => ({
  url: process.env.NEXT_PUBLIC_API_URL!,
  exchanges: [cacheExchange, ssrExchange, fetchExchange],
});

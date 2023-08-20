import { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';
import { useRouter } from 'next/router';
import { type } from 'os';

export const useIsAuth = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const [{ data, fetching }] = useMeQuery({
      variables: {
        token: localStorage.getItem('user')!,
      },
    });
    useEffect(() => {
      if (!fetching && !data?.me) router.replace('/login');
    }, [data, fetching, router]);
  }
};

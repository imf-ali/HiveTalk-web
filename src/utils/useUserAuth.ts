import { useEffect, useState } from 'react';
import { useMeQuery } from '../generated/graphql';

export const useUserAuth = () => {
  const [body, setBody] = useState<any>();
  if (typeof window !== 'undefined') {
    const [{ data, fetching }] = useMeQuery({
      variables: { token: localStorage.getItem('user')! },
    });
    useEffect(() => {
      if (!fetching && data?.me) {
        setBody(data.me);
      }
    }, [data, fetching]);
  }
  return body;
};

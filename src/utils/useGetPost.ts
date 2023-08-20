import { useEffect, useState } from 'react';
import { FieldError, Post, useGetPostsQuery } from '../generated/graphql';

export const useGetPost = () => {
  const [postData, setPostData] = useState<any>({
    data: null,
    fetching: null,
  });
  if (typeof window !== 'undefined') {
    const [{ data, fetching }] = useGetPostsQuery({
      variables: {
        token: localStorage.getItem('user')!,
      },
    });
    useEffect(() => {
      setPostData({
        data,
        fetching,
      });
    }, [data, fetching]);
  }
  return postData;
};

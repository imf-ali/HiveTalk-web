import { useEffect, useState } from 'react';
import { useGetPostQuery } from '../generated/graphql';

export const useEachPost = (postId: number) => {
  const [postData, setPostData] = useState<any>({
    data: null,
    fetching: null,
  });
  if (typeof window !== 'undefined') {
    const [{ data, fetching }] = useGetPostQuery({
      pause: postId === -1,
      variables: {
        postId,
        token: localStorage.getItem('user')!,
      },
    });
    useEffect(() => {
      setPostData({
        data: data?.post,
        fetching,
      });
    }, [data, fetching]);
  }
  return postData;
};

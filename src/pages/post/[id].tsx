import { withUrqlClient } from 'next-urql';
import React from 'react';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { useEachPost } from '../../utils/useEachPost';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Box, Heading } from '@chakra-ui/react';

const Post: React.FC<{}> = () => {
  const router = useRouter();
  const postData = useEachPost(
    typeof router.query.id === 'string' ? parseInt(router.query.id) : -1
  );

  if (postData.fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!postData.data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{postData.data.post.title}</Heading>
      <Box mb={4}>{postData.data.post.text}</Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);

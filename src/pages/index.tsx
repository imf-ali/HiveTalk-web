import { Post } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import React from 'react';
import Layout from '../components/Layout';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useGetPost } from '../utils/useGetPost';
import UpdootSection from '../components/UpdootSection';

const Index = () => {
  const postData = useGetPost();

  if (!postData.data && !postData.fetching) {
    return <div>Data could not be fetched due to some reason</div>;
  }
  return (
    <Layout>
      <Flex align="center">
        <Heading>HiveTalk</Heading>
        <Link href="/create-post" style={{ marginLeft: 'auto' }}>
          Create Post
        </Link>
      </Flex>
      <br />
      {!postData.data && postData.fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={8}>
          {postData.data?.getPosts.posts &&
            postData.data.getPosts.posts.map((post: Post) => (
              <Flex key={post.id} p={5} shadow="md" borderWidth="1px">
                <UpdootSection post={post} />
                <Box>
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Text>posted by {post.user.username}</Text>
                  <Text mt={4}>{post.textSnippet}</Text>
                </Box>
              </Flex>
            ))}
        </Stack>
      )}
      {!postData.data?.getPosts.posts ? null : (
        <Flex>
          <Button isLoading={postData.fetching} m="auto" my={8}>
            Load More
          </Button>
        </Flex>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

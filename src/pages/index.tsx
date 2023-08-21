import { Post, useDeletePostMutation, useMeQuery } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useGetPost } from '../utils/useGetPost';
import UpdootSection from '../components/UpdootSection';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useUserAuth } from '../utils/useUserAuth';

const Index = () => {
  const [posts, setPosts] = useState<any>([]);
  const postData = useGetPost();
  const me = useUserAuth();
  const [, deletePost] = useDeletePostMutation();

  useEffect(() => {
    setPosts(postData.data?.getPosts.posts || []);
  }, [postData]);

  if (!postData.data && !postData.fetching) {
    return <div>Data could not be fetched due to some reason</div>;
  }
  return (
    <Layout>
      {!postData.data && postData.fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={8}>
          {posts.length &&
            posts.map((post: Post) => (
              <Flex key={post.id} p={5} shadow="md" borderWidth="1px">
                <UpdootSection post={post} />
                <Box flex={1}>
                  <Link href="/post/[id]" as={`/post/${post.id}`}>
                    <Heading fontSize="xl">{post.title}</Heading>
                  </Link>
                  <Text>posted by {post.user.username}</Text>
                  <Flex>
                    <Text flex={1} mt={4}>
                      {post.textSnippet}
                    </Text>
                    {me?.user.id === post.userId && (
                      <Box>
                        <IconButton
                          as={Link}
                          href={`/post/edit/${post.id}`}
                          mr={4}
                          aria-label="Edit Icon"
                          icon={<EditIcon />}
                        />
                        <IconButton
                          colorScheme="red"
                          onClick={async () => {
                            const response = await deletePost({
                              deletePostId: post.id,
                              token: localStorage.getItem('user')!,
                            });
                            if (response.data?.deletePost) {
                              setPosts((posts: Post[]) =>
                                posts.filter((item) => item.id !== post.id)
                              );
                            }
                          }}
                          aria-label="Delete Icon"
                          icon={<DeleteIcon />}
                        />
                      </Box>
                    )}
                  </Flex>
                </Box>
              </Flex>
            ))}
        </Stack>
      )}
      {/* {!postData.data?.getPosts.posts ? null : (
        <Flex>
          <Button isLoading={postData.fetching} m="auto" my={8}>
            Load More
          </Button>
        </Flex>
      )} */}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

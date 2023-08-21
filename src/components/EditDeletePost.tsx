import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { Post, useDeletePostMutation } from '../generated/graphql';

interface EditDeletePostProps {
  id: number;
  setPosts: any;
}

export const EditDeletePost: React.FC<EditDeletePostProps> = ({
  id,
  setPosts,
}) => {
  const [, deletePost] = useDeletePostMutation();
  return (
    <Box>
      <IconButton
        as={Link}
        href={`/post/edit/${id}`}
        mr={4}
        aria-label="Edit Icon"
        icon={<EditIcon />}
      />
      <IconButton
        colorScheme="red"
        onClick={async () => {
          const response = await deletePost({
            deletePostId: id,
            token: localStorage.getItem('user')!,
          });
          if (response.data?.deletePost) {
            setPosts((posts: Post[]) => posts.filter((item) => item.id !== id));
          }
        }}
        aria-label="Delete Icon"
        icon={<DeleteIcon />}
      />
    </Box>
  );
};

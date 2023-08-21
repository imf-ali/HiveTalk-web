import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Post, useVoteMutation } from '../generated/graphql';
import { useUserAuth } from '../utils/useUserAuth';

interface UpdootSectionProps {
  post: Post;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const me = useUserAuth();
  const [points, setPoints] = useState(post.points);
  const [, vote] = useVoteMutation();
  const [voteStatus, setVoteStatus] = useState(post.voteStatus);
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={async () => {
          if (!me?.user) {
            return;
          }
          const response = await vote({
            postId: post.id,
            token: localStorage.getItem('user')!,
            value: 1,
          });
          if (response.data?.vote.points !== null) {
            setVoteStatus(1);
            setPoints(response.data?.vote.points);
          }
        }}
        colorScheme={voteStatus === 1 ? 'green' : undefined}
        aria-label="upvote"
        icon={<ChevronUpIcon />}
      />
      {points}
      <IconButton
        onClick={async () => {
          if (!me?.user) {
            return;
          }
          const response = await vote({
            postId: post.id,
            token: localStorage.getItem('user')!,
            value: -1,
          });
          if (response.data?.vote.points !== null) {
            setVoteStatus(-1);
            setPoints(response.data?.vote.points);
          }
        }}
        colorScheme={voteStatus === -1 ? 'red' : undefined}
        aria-label="downvote"
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
};

export default UpdootSection;

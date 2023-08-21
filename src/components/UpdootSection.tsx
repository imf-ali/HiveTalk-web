import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Post, useVoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
  post: Post;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [points, setPoints] = useState(post.points);
  const [, vote] = useVoteMutation();
  const [voteStatus, setVoteStatus] = useState(post.voteStatus);
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={async () => {
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

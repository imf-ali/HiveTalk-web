import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {
  FieldError,
  User,
  useLogoutMutation,
  useMeQuery,
} from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useUserAuth } from '../utils/useUserAuth';
import { useRouter } from 'next/router';

type UserAuthResponse = {
  errors?: FieldError[];
  user?: User;
};

const NavBar: React.FC<{}> = () => {
  const router = useRouter();
  const [, logout] = useLogoutMutation();
  let body = null;
  const data: UserAuthResponse = useUserAuth();
  if (!data?.user) {
    body = (
      <>
        <Link style={{ marginRight: '12px', color: 'black' }} href="/login">
          Login
        </Link>
        <Link style={{ color: 'black' }} href="/register">
          Register
        </Link>
      </>
    );
  } else {
    body = (
      <Flex align="center">
        <Button as={Link} href="/create-post" mr={4}>
          Create Post
        </Button>
        <Box mr={4} color="black" fontWeight="bold">
          {data.user?.username}
        </Box>
        <Button
          onClick={() => {
            logout({ token: localStorage.getItem('user')! });
            localStorage.removeItem('user');
            router.reload();
          }}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link href="/">
          <Heading>HiveTalk</Heading>
        </Link>
        <Box color="white" ml="auto">
          {body}
        </Box>
      </Flex>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(NavBar);

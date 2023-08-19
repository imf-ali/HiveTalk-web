import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
	let body = null;

	if (typeof window !== 'undefined') {
    const [, logout] = useLogoutMutation();
		const [{ data, fetching }] = useMeQuery({
			variables: { token: localStorage.getItem('user')! },
		});
		if (fetching) {
		} else if (!data?.me) {
			body = (
				<>
					<Link
						style={{ marginRight: '12px' }}
						href='/login'
					>
						Login
					</Link>
					<Link href='/register'>Register</Link>
				</>
			);
		} else {
			body = (
				<Flex>
					<Box mr={2}>{data.me.user?.__typename}</Box>
					<Button onClick={() => {
            logout({ token: localStorage.getItem('user')! });
            localStorage.removeItem('user');
          }} variant='link'>Logout</Button>
				</Flex>
			);
		}
	}

	return (
		<Flex
			bg='tomato'
			p={4}
		>
			<Box
				color='white'
				ml='auto'
			>
				{body}
			</Box>
		</Flex>
	);
};

export default NavBar;

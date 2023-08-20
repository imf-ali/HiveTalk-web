import NavBar from '../components/NavBar';
import { usePostsQuery } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Layout>
      <div>Hello World</div>
      <br />
      {!data
        ? null
        : data?.posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

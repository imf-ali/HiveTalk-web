import NavBar from '../components/NavBar';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const [{data}] = usePostsQuery();
	return (
		<>
			<NavBar />
      <div>Hello World</div>
      <br />
      {!data ? null : data?.posts.map(post => <div>{post.title}</div>)}
		</>
	);
};

export default Index;

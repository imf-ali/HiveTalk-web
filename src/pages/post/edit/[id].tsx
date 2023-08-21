import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../../components/InputField';
import Layout from '../../../components/Layout';
import { useUpdatePostMutation } from '../../../generated/graphql';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { useEachPost } from '../../../utils/useEachPost';

const UpdatePost: React.FC<{}> = () => {
  const router = useRouter();
  const postData = useEachPost(
    typeof router.query.id === 'string' ? parseInt(router.query.id) : -1
  );
  const [, updatePost] = useUpdatePostMutation();

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
    <Layout variant="small">
      <Formik
        initialValues={{
          title: postData.data.post.title,
          text: postData.data.post.text,
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await updatePost({
            token: localStorage.getItem('user')!,
            text: values.text,
            title: values.title,
            updatePostId: postData.data.post.id,
          });
          if (response.data?.updatePost.post) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="Title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="Text"
                label="Text"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              Update Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(UpdatePost);

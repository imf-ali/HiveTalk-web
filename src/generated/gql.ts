/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment RegularUser on User {\n  id\n  username\n}": types.RegularUserFragmentDoc,
    "mutation CreatePost($input: PostInputType!) {\n  createPost(input: $input) {\n    text\n    title\n  }\n}": types.CreatePostDocument,
    "mutation DeletePost($token: String!, $deletePostId: Float!) {\n  deletePost(token: $token, id: $deletePostId)\n}": types.DeletePostDocument,
    "mutation Login($options: UsernamePasswordInputType!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}": types.LoginDocument,
    "mutation Logout($token: String!) {\n  logout(token: $token) {\n    user {\n      ...RegularUser\n    }\n  }\n}": types.LogoutDocument,
    "mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}": types.RegisterDocument,
    "mutation UpdatePost($token: String!, $text: String!, $title: String!, $updatePostId: Float!) {\n  updatePost(token: $token, text: $text, title: $title, id: $updatePostId) {\n    errors {\n      field\n      message\n    }\n    post {\n      title\n      text\n      textSnippet\n      points\n      userId\n    }\n  }\n}": types.UpdatePostDocument,
    "mutation Vote($value: Float!, $token: String!, $postId: Float!) {\n  vote(value: $value, token: $token, postId: $postId) {\n    points\n  }\n}": types.VoteDocument,
    "query Me($token: String!) {\n  me(token: $token) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}": types.MeDocument,
    "query GetPost($postId: Int!, $token: String) {\n  post(id: $postId) {\n    errors {\n      field\n      message\n    }\n    post {\n      id\n      text\n      title\n      voteStatus(token: $token)\n      points\n      userId\n    }\n  }\n}": types.GetPostDocument,
    "query GetPosts($token: String) {\n  getPosts {\n    errors {\n      field\n      message\n    }\n    posts {\n      id\n      points\n      textSnippet\n      title\n      userId\n      voteStatus(token: $token)\n      user {\n        id\n        username\n      }\n    }\n  }\n}": types.GetPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RegularUser on User {\n  id\n  username\n}"): (typeof documents)["fragment RegularUser on User {\n  id\n  username\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($input: PostInputType!) {\n  createPost(input: $input) {\n    text\n    title\n  }\n}"): (typeof documents)["mutation CreatePost($input: PostInputType!) {\n  createPost(input: $input) {\n    text\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeletePost($token: String!, $deletePostId: Float!) {\n  deletePost(token: $token, id: $deletePostId)\n}"): (typeof documents)["mutation DeletePost($token: String!, $deletePostId: Float!) {\n  deletePost(token: $token, id: $deletePostId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($options: UsernamePasswordInputType!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}"): (typeof documents)["mutation Login($options: UsernamePasswordInputType!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout($token: String!) {\n  logout(token: $token) {\n    user {\n      ...RegularUser\n    }\n  }\n}"): (typeof documents)["mutation Logout($token: String!) {\n  logout(token: $token) {\n    user {\n      ...RegularUser\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}"): (typeof documents)["mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdatePost($token: String!, $text: String!, $title: String!, $updatePostId: Float!) {\n  updatePost(token: $token, text: $text, title: $title, id: $updatePostId) {\n    errors {\n      field\n      message\n    }\n    post {\n      title\n      text\n      textSnippet\n      points\n      userId\n    }\n  }\n}"): (typeof documents)["mutation UpdatePost($token: String!, $text: String!, $title: String!, $updatePostId: Float!) {\n  updatePost(token: $token, text: $text, title: $title, id: $updatePostId) {\n    errors {\n      field\n      message\n    }\n    post {\n      title\n      text\n      textSnippet\n      points\n      userId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Vote($value: Float!, $token: String!, $postId: Float!) {\n  vote(value: $value, token: $token, postId: $postId) {\n    points\n  }\n}"): (typeof documents)["mutation Vote($value: Float!, $token: String!, $postId: Float!) {\n  vote(value: $value, token: $token, postId: $postId) {\n    points\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me($token: String!) {\n  me(token: $token) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}"): (typeof documents)["query Me($token: String!) {\n  me(token: $token) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPost($postId: Int!, $token: String) {\n  post(id: $postId) {\n    errors {\n      field\n      message\n    }\n    post {\n      id\n      text\n      title\n      voteStatus(token: $token)\n      points\n      userId\n    }\n  }\n}"): (typeof documents)["query GetPost($postId: Int!, $token: String) {\n  post(id: $postId) {\n    errors {\n      field\n      message\n    }\n    post {\n      id\n      text\n      title\n      voteStatus(token: $token)\n      points\n      userId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPosts($token: String) {\n  getPosts {\n    errors {\n      field\n      message\n    }\n    posts {\n      id\n      points\n      textSnippet\n      title\n      userId\n      voteStatus(token: $token)\n      user {\n        id\n        username\n      }\n    }\n  }\n}"): (typeof documents)["query GetPosts($token: String) {\n  getPosts {\n    errors {\n      field\n      message\n    }\n    posts {\n      id\n      points\n      textSnippet\n      title\n      userId\n      voteStatus(token: $token)\n      user {\n        id\n        username\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
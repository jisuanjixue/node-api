const { gql } = require('apollo-server-express');
// const typeDefsAuth = require('./modules/auth/graphqlSchema');
// const typeDefsPost = require('./modules/post/graphqlSchema');

const typeDefs = gql`
type Post {
  id: ID,
  title: String
  content: String
  userId: ID!
  user: User!
}
  type User {
    id: ID
    username: String!
    email: String!
    postId: String!
    posts: Post!
  }
   type Query {
    myPosts(postId: String!): Post
    me: User
  }
   type Mutation {
    signup (username: String!, email: String!, password: String!): String
    login (email: String!, password: String!): String
    addPost(title: String!, content: String!): Post!
  }
`;

module.exports = typeDefs

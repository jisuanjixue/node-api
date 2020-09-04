// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefsPost = gql`
  type Post {
    userId: ID!
    id: ID,
    title: String,
    content: String
  }
  extend type Query {
    myPosts(postId: String!): Post
  }
  extend type Mutation {
    addPost(title: String!, content: String!): Post
  }
`;

module.exports = typeDefsPost;
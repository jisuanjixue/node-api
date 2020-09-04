const { gql } = require('apollo-server-express');

const typeDefsAuth = gql`
type User {
    id: Int!
    username: String!
    email: String!
  }
  extend type Query {
    me: User
    userlist: [User]
  }
  type AuthPayload {
    user: User
  }
  extend type Mutation {
    signup (username: String!, email: String!, password: String!): String
    login (email: String!, password: String!): String
  }
`;

module.exports = typeDefsAuth;
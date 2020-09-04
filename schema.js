const { gql } = require('apollo-server-express');
const typeDefsAuth = require('./modules/auth/graphqlSchema');
const typeDefsPost = require('./modules/post/graphqlSchema');

const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${typeDefsAuth}
  ${typeDefsPost}

`

module.exports = typeDefs

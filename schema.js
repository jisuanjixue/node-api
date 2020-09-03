const { gql } = require('apollo-server-express');
const typeDefsAuth = require('./modules/auth/graphqlSchema')

const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${typeDefsAuth}
`

module.exports = typeDefs

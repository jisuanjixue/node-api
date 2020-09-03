const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("express-jwt");
require("dotenv").config();

const resolversAuth = require('./modules/auth/resolvers');
const typeDefs = require('./schema');


// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  algorithms:['HS256']
});

// create our express app
const app = express();

// graphql endpoint
// app.use('/api', bodyParser.json(), auth, graphqlExpress(req => ({
//     schema,
//     context: {
//       user: req.user
//     }
//   }))
//   )
app.use(auth)
  // #5 Initialize an Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers: [resolversAuth],
  context: ({ req, res }) => ({ req, res })
});

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

// #8 Set the port that the Express application will listen to
app.listen(4000);
// app.listen({ port: 3000 }, () => {
console.log(`Server running on http://localhost:${4000}${server.graphqlPath}`);
// });

const express = require("express");
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
// mongoose connector
const db = require("./config/connection");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({app});
    db.once("open", () => {
      app.listen(PORT, () => {
        console.log("Server running on PORT 3001!");
  });
})
}

startApolloServer();
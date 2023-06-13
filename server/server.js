const express = require("express");

// mongoose connector
const db = require("./config/connection");

const models = require('./models')
const app = express();

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server running on PORT 3001!");
  });
});

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://pdarkhal:Pyhu3cQjgdgH0JS4@cluster0.kopstv8.mongodb.net/?retryWrites=true&w=majority"
);
module.exports = mongoose.connection;

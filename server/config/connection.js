const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/urgentCare_db"
);
module.exports = mongoose.connection;

// LINE 4 i deleted a period before the colum 27017
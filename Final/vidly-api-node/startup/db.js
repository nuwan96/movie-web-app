const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(
      db,

      {
        // these below things use for remove the vrsion errors
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => winston.info(`Connected to ${db}...`));
};
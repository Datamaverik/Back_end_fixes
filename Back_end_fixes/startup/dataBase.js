const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function () {
  mongoose
    .connect("add your own mongo string here")
    .then(() => winston.info("Connected to MongoDB..."))
    .catch(err => winston.error("MongoDB connection failed", err));
};
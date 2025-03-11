const express = require("express");
const dotenv = require("dotenv");

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const app = express();

app.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "Hello World");
});

module.exports = app;

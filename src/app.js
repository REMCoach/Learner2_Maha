const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Database connection
require("./helpers/databaseConnection");
// require('./helpers/redisConnection');

// Initialize server
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// App routes
app.use(routes);

module.exports = app;

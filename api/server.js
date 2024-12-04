const express = require('express');
const cors = require('cors');
const connectWithDB = require('../config/db');
const routes = require('../routes');
require('dotenv').config();

const app = express();

// Connect with the database
(async () => {
  await connectWithDB();
})();

// Middleware to handle JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Use express router
app.use('/', routes);

module.exports = app;

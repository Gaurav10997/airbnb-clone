const express = require('express');
const cors = require('cors');
const connectWithDB = require("./config/db");
require('dotenv').config();
const path = require("path");
const { loadConfig } = require('./../api/startup/startup');
const routes = require('./routes'); // Import routes

const app = express();

// Middleware to handle JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Load configurations
async function loadConfigurations() {
  await connectWithDB();
  await loadConfig();
}

(async () => {
  await loadConfigurations();
  console.log("Ready to proceed!");
})();



// Use express router for APIs
app.use("/api", routes);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;

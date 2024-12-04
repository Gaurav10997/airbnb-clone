const express = require('express');
const path = require('path');
require("dotenv").config();
const cors = require("cors");
const connectWithDB = require("./config/db");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;

const app = express();

// connect with database
connectWithDB();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Serve the static frontend from the 'dist' folder
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend in production!' });
});

// middleware to handle json
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// use express router
app.use("/", require("./routes"));

// Fallback for SPA (single-page application)
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

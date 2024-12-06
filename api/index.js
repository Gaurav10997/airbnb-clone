// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectWithDB = require("./config/db");
// const cookieSession = require("cookie-session");
// const cookieParser = require("cookie-parser");
// const cloudinary = require("cloudinary").v2;
// const { loadConfig } = require('./../api/startup/startup')

// async function loadConfigurations(){
//   await connectWithDB();
//   await loadConfig()
// }

// loadConfigurations()


// // cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// const app = express();

// // For handling cookies
// app.use(cookieParser());

// // Initialize cookie-session middleware
// app.use(
//   cookieSession({
//     name: "session",
//     maxAge: process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
//     keys: [process.env.SESSION_SECRET],
//     secure: true, // Only send over HTTPS
//     sameSite: "none", // Allow cross-origin requests
//     httpOnly: true, // Makes the cookie accessible only on the server-side
//   })
// );

// // middleware to handle json
// app.use(express.json());

// // CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );

// // use express router
// app.use("/", require("./routes"));

// app.listen(process.env.PORT || 8000, (err) => {
//   if (err) {
//     console.log("Error in connecting to server: ", err);
//   }
//   console.log(`Server is running on port no. ${process.env.PORT}`);
// });

// module.exports = app;



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


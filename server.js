require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

// Sets the server up for socket.io
const server = require('http').Server(app);

// Define IO
const io = require('socket.io') (server);

// Exporting io to use in socket.js
module.exports = io;

// Defining routes
const routes = require('./routes/index.js');

// Connects the application to cloud database
require('./database');

// Brings in all the event listeners and handlers from socket.js
require('./socket');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// API and view routes
app.use(routes);

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
const express = require('express');
const http = require('http');
const path = require('path');

// Create Express app
const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname)));

// Route for /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Default route redirect to /home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Create HTTP server
const PORT = 3001;
http.createServer(app).listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/home in your browser`);
});

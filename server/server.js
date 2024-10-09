const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

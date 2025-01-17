const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the API key
app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// Default route to serve the query.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'query.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});

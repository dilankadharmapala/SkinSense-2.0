// Require the necessary packages
const express = require('express');  // Express framework
const path = require('path');       // Path module to work with file paths
const cors = require('cors');       // CORS middleware

// Create an instance of Express
const app = express();

// Enable CORS for all requests (This will allow the browser to make requests to this server)
app.use(cors());  // Allow requests from any origin

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the "my-project" directory (including model files)
app.use('/my-project', express.static(path.join(__dirname, 'my-project')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is your server!');
});

// Add a route to serve the model file
app.get('/my-project/model/model.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'my-project', 'model', 'model.json'));
});

// Start the server
const port = 8000;  // Make sure the port is set
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
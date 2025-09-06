const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/event-notification', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Basic route
app.get('/', (req, res) => {
  res.send('Event Notification Service is running');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
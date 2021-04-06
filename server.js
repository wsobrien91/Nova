// Requiring necessary npm packages
const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8080;
const app = express();

// Connect Database
connectDB();

app.get('/', (re, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

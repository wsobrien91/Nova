// Requiring necessary npm packages
const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect DB
connectDB();

app.get('/', (re, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/post', require('./routes/api/posts'));

const PORT = process.env.PORT || 8080;

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

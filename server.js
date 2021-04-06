// Requiring necessary npm packages
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (re, res) => res.send('API Running'));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

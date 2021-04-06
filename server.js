// Requiring necessary npm packages
var express = require('express');
const PORT = process.env.PORT || 8080;
var app = express();

app.get('/', (re, res) => res.send('API Running'));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

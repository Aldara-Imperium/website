const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/404.html');
  });
  app.listen(3000, () => console.log('Server started'));
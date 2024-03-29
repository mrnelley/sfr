const port = 3000;

const db = require('./db/connection.js');
const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(__dirname + '/public/'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/index.html')));

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://${port}/`);
});

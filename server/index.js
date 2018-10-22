const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const works = require('../database-mysql');


const app = express();

// UNCOMMENT FOR ANGULAR
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/works', (req, res) => {
  works.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
// process.env.PORT ||
app.listen(3000, () => {
  console.log('listening on port 3000!');
});

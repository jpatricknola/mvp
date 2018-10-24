const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();

app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));


// get every haiku in the database
app.get('/works', (req, res) => {
  console.log('recieved get request');
  db.selectAll((err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(result, 'result');
      res.send(result);
    }
  });
});

// save a new haiku to the database
app.post('/works', (req, res) => {
  console.log('posty');
  req.on('data', (chunk) => {
    const obj = JSON.parse(chunk);
    db.save(obj, (result) => {
      console.log(result);
      res.end('namaste');
    });
  });
});

// process.env.PORT ||
app.listen(3000, () => {
  console.log('listening on port 3000!');
});

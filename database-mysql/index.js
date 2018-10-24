/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'haiku',
});

const selectAll = (callback) => {
  connection.query('SELECT * FROM works', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const save = (obj, callback) => {
  const queryString = `INSERT INTO works (id, title, first, second, third) VALUES (${null}, "${obj.title}", "${obj.first}", "${obj.second}", "${obj.third}")`;
  connection.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else if (results) {
      callback('saved haiku');
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;

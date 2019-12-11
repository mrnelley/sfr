'use strict';

const Sequelize = require('sequelize');
const pkg = require('../package.json');

module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
});




// const { Client } = require('pg');
//
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });
//
// client.connect();
//
// client.query('SELECT * FROM *;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

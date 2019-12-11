'use strict';

const db = require('connection.js');
const Representative = require('repModel.js');
const District = require('districtModel.js') ;

Representative.belongsTo(District);
District.hasMany(Representative);

module.exports = {
  db,
  Representative,
  District,
}

const Sequelize = require('sequelize');
const db = require('./connection.js');

const Representative = db.define('representative', {
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.VIRTUAL,
    get(){
      return (`${this.fName} ${this.lName}`)
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      isEmail: true
    },
  },
  district: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://fillmurray.com/300/400',
    validate: {
      isUrl: true,
    }
  },
  description: {
    text: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.NUMBER
    }
  }
})


module.exports = Representative

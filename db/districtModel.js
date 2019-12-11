const Sequelize = require('sequelize');
const db = require('./connection.js');

const District = db.define('district', {
  number: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: '',
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

District.beforeValidate((districtInstance, optionsObj) => {
  if(!districtInstance.imgURL){
    districtInstance.imgURL = 'https://media.nbcwashington.com/2019/09/110718-maryland-congressional-district-map.jpg?fit=829%2C466',
  }
})

module.exports = District

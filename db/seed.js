const db = require('./connection.js');
const Representatives = require('./models.js').Representative;
const Districts = require('./models.js').District;

const reps = [{

  },
  {

  }]

const districts = [{

  },
  {

  }]
const seed = () => {
  return Districts.bulkCreate(districts)
  .then(()=>{
    Representatives.bulkCreate(reps)
  })
}

seed().then(()=> process.exit());

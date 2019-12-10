const port = 3000;

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Jello World!'))

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://${port}/`);
});

const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');


const dataPath = path.join(__dirname, '..','data','users.json')

router.get('/users', (req, res) => {
   fs.readFile(dataPath, { encoding: 'utf8' })
   .then(data => JSON.parse(data))
   .then(users => res.send(users))
});


router.get('/users/:id', (req, res) => {
  fs.readFile(dataPath, { encoding: 'utf8' })
  .then(data => JSON.parse(data))
  .then(users => users.find(user => user._id === req.params.id))
  .then(user => res.send(user))

});

module.exports = router;
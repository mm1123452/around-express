const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');


const dataPath = path.join(__dirname, '..','data','cards.json')

router.get('/cards', (req, res) => {
   fs.readFile(dataPath, { encoding: 'utf8' })
   .then(data => JSON.parse(data))
   .then(cards => res.send(cards))
});




module.exports = router;
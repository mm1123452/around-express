const express = require('express');
const path = require('path')

const { PORT = 3000, BASE_PATH } = process.env;


const app = express();

app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log('running in port', PORT)
  console.log('running in port', PORT)
  console.log(BASE_PATH);
});

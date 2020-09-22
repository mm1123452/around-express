const express = require('express');
const path = require('path')
const  usersRouter  = require('./routes/users');
const  cardsRouter  = require('./routes/cards');


const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/users:id', usersRouter);
app.use('/', usersRouter);


app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log('running in port', PORT)
});

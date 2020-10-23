const express = require('express');
const path = require('path')
const  userRouter  = require('./routes/users');
const  cardsRouter  = require('./routes/cards');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);
app.use('/cards', cardsRouter);

app.get('*',(req,res)=>{
  return res.status(404).send({ "message": "Requested resource not found" });
 });

app.listen(PORT, () => {
  console.log('running in port', PORT)
});
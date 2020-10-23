const express = require('express');
const path = require('path')
const  userRouter  = require('./routes/users');
const  cardsRouter  = require('./routes/cards');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f9242747539a77db72ef30d'
  };

  next();
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

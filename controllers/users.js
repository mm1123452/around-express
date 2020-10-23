const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  const { userId} = req.params;

  User.findById(userId)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const ERROR_CODE = 400;
  const { name, about, avatar } = req.body;

  User.create({ about, avatar, name})
  .then(user => res.send({ data: user }))
  .catch(err => {
    console.log('err',err)
    console.log('err name',err.name)

    if (err.name === 'ValidationError'){
      console.log('validation error!!!')
    }
    res.status(500).send({ message: err.message })
  });
};

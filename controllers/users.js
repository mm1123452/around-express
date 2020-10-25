const User = require('../models/user');
const mongoose = require('mongoose');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  const { userId} = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(404).send({ message: 'User Id not found!' })
  }

  User.findById(userId)
  .then(user => {
    if (user === null) {
      return res.status(404).send({ message: 'User Id not found!' })
    }
    res.send({ data: user })
    })
    .catch(err => {
      return res.status(500).send({ message: err.message })
    });
};

module.exports.updateUserProfileById = (req, res) => {
  const { name, about} = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    {name,about},
    {
      new: true,
      runValidators: true
    }
  )
  .then(user => {
      if (user === null) {
        return res.status(404).send({ message: 'User Id not found!' })
      }
      res.send({ data: user })
    })
    .catch(err => {
      return res.status(500).send({ message: err.message })
    });
};

module.exports.updateAvatarById = (req, res) => {
  const { avatar} = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    {avatar},
    {
      new: true,
      runValidators: true
    }
  )
  .then(user => {
      if (user === null) {
        return res.status(404).send({ message: 'User Id not found!' })
      }
      res.send({ data: user })
    })
    .catch(err => {
      return res.status(500).send({ message: err.message })
    });
};


module.exports.createUser = (req, res) => {
  const ERROR_CODE = 400;
  const { name, about, avatar } = req.body;

  User.create({ about, avatar, name})
  .then(user => res.send({ data: user }))
  .catch(err => {
    if (err.name === 'ValidationError'){
      return res.status(ERROR_CODE).send({ message: 'Invalid data received. Try again!' })
    }
    return res.status(500).send({ message: err.message })
  });
};

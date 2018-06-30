const express = require('express');
const Users = require('./userController');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  console.log('get all users');
  Users.findAll()
    .then(users => {
      if (users.length) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ msg: 'No users found.' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = userRouter;

const express = require('express');
const userRouter = require('./users/userRoutes');
const mongoose = require('mongoose');
const server = express();
const PORT = process.env.PORT || 5000;

server.use('/api/users', userRouter);

mongoose
  .connect('mongodb://localhost/outing_test')
  .then(() => {
    server.listen(PORT, () => {
      console.log(`great things are happening on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log('error connecting to mongodb');
  });

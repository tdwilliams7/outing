const Users = require('./userModel');

const users = {
  addOne: async ({ name, email, password }) => {
    try {
      const newUser = new Users({ name, email, password });
      const user = newUser.save();
    } catch (err) {
      return err;
    }
  },
  findAll: async () => {
    try {
      const users = await Users.find({});
    } catch (err) {
      return err;
    }
    return users;
  },
  findByEmail: async email => {
    try {
      const user = await Users.find({ email });
    } catch (err) {
      return err;
    }
    return user;
  },
  findById: async _id => {
    try {
      const user = User.find({ _id });
    } catch (err) {
      return err;
    }
    return user;
  },
  update: async (name, email, password) => {
    try {
      const user = await Users.find({ email })
        .then(user => {
          user
            .update({ name, email, password }, { new: true })
            .then(user => {
              return user;
            })
            .catch(err => {
              return err;
            });
        })
        .catch(err => {
          return err;
        });
    } catch (err) {
      return err;
    }
  }
};

module.exports = users;

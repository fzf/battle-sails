/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(error, salt) {
      bcrypt.hash(user.password, salt, function(error, hash) {
        if (error) {
          console.log(error);
          cb(error);
        }
        else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
};

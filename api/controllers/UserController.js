/**
 * UserController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  find: function(req, res) {
    User.find(req.param('id')).exec(function(err, user) {
      res.json({ 'user' : user })
    });
  },

  index: function(req, res) {
    User.find().exec(function(err, users) {
      res.json({ 'users' : users });
    });
  },

  subscribe: function(req, res) {
    User.subscribe(req.socket);
    res.json({ success: true });
  }
};

/**
 * UserController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	new: function(req,res) {
    res.view('users/new');
  },

  current: function(req,res) {
    res.view('users/current');
  },

  subscribe: function(req, res) {
    User.findOne({ id: req.session.passport.user }, function(err, user) {
      sails.config.globals.current_users.push({"socketId": req.socket.id, "username": user.username, "id": user.id});
      req.socket.broadcast.emit('user', {"socketId": req.socket.id, "username": user.username, "id": user.id});
      res.json({ 'current_users' : sails.config.globals.current_users });
    });
  }
};

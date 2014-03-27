/**
 * SessionsController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require("passport");
module.exports = {
  login: function(req,res){
    res.view("sessions/login");
  },

  create: function(req,res){
    passport.authenticate('local', function(err, user, info){
      if ((err) || (!user)) {
        res.redirect('/login');
        return;
      }
      req.logIn(user, function(err){
        if (err) res.redirect('/login');
        return res.redirect('/users/current');
      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },
  _config: {}
};

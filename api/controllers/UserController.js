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
    res.view('users/current')
  }
};
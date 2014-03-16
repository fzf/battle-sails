var Battle = window.Battle = Ember.Application.create({
  ready: function() {
    return this.setSocketIO();
  },
  setSocketIO: function() {
    var socket = io.connect('http://localhost:1337');
    this.set('socket', io.connect('http://localhost:1337'));
    socket.on('error', function(err) {
      return console.log(err);
    });
    socket.on('connect', function() {
      console.log('socket connected');

    });
  }
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/socket');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Battle.UsersRoute = Ember.Route.extend({
  model: function() {
    var socket = Battle.socket;
    var store  = this.get('store');

    socket.emit('get', {'url' : '/users/subscribe'} , function(response) {
      console.log('subscribed to users', response);
    });

    socket.on('user', function(response) {
      console.log(response);
      var user = store.createRecord('user', response.data);

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      user.save();
    });
    return store.find('user');
  }
});


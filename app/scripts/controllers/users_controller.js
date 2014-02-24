Battle.UsersController = Ember.ObjectController.extend({
  model: function() {
    return this.store.find('users');
  }
});


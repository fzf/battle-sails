Battle.Router.map(function () {

  this.resource('users', function(){
    this.route('new');
    this.route('show', { path: '/:user_id' });
    this.route('edit');

    this.route('create');
  });


});

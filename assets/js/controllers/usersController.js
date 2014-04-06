'use strict';

app.controller('UsersController', function UsersController($scope, socket, $log) {
  $scope.users = [];
  $scope.init = function() {
    socket.emit('get', {'url' : '/users/subscribe'}, function(response, event) {
      $scope.users = $scope.users.concat(JSON.parse(response).current_users)
      console.log('subscribed to users', response);
    });
  }

  socket.on('socket:disconnect', function (ev, data) {
    $scope.users = _.reject($scope.users, {'socketId': ev.id});
    console.log('disconnect!');
  });

  socket.on('user', function(ev, data) {
    $scope.users.push(ev);
    // socket.emit('get', {'url': '/users/subscribe'}, function(response, event) {});
    $log.debug('sailsSocket::/user', ev);
  });
});

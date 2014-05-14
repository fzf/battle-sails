'use strict';

app.controller('UsersController', function UsersController($scope, socket, $log, $http, $location) {
  $scope.users = [];
  $scope.battles = [];

  $scope.init = function() {
    socket.emit('get', {'url' : '/battles/subscribe'}, function(response, event) {
      $scope.battles = $scope.battles.concat(JSON.parse(response).battles);
      console.log('subscribed to battles');
    });

  }

  $scope.createBattle = function(event) {
    console.log('creating battle');
    $http({
      method: 'POST',
      url: '/battles/create'
    }).success(function(data, status, headers, config) {
      $location.path("battle");
    });
  }

  socket.on('socket:disconnect', function (ev, data) {
    $scope.users = _.reject($scope.users, {'socketId': ev.id});
    console.log('disconnect!');
  });

  socket.on('battle', function(ev, data) {
    if(ev.verb === 'created'){
      $scope.battles.push(ev.data)
    }
  });
});

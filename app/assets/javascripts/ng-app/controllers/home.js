function HomeController ($scope, $location) {

  $scope.goTo = function(place) {
    $location.path(`/${place}`);
  }

}

angular
  .module('app')
  .controller('HomeController', HomeController)

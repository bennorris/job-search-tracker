function HomeController ($scope, $location) {

  $scope.goTo = function(place) {
    $location.path(`/${place}`);
  }
  $scope.image = "https://s29.postimg.org/pkwylq9g7/blefs8_wzhm_breather.jpg";
  $scope.bodyStyle = {background: "url(" + $scope.image + ") no-repeat center / cover"};
}


angular
  .module('app')
  .controller('HomeController', HomeController)

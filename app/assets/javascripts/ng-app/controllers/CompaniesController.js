function CompaniesController ($scope) {
  $scope.url = 'https://s24.postimg.org/qy3txxijp/vz07w73ta_k_mike_wilson.jpg';
  $scope.bodyImage = {background: "url(" + $scope.url + ") no-repeat fixed center center / cover"};
}


angular
  .module('app')
  .controller('CompaniesController', CompaniesController)

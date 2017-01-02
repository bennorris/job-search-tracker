function CustomNavbar () {
  return {
    restrict: 'E',
    templateUrl: 'navbar.html',
  
  }

}

angular
  .module('app')
  .directive('navigate', CustomNavbar)

angular
  .module('app', ['ngRoute', 'templates'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .when('/jobs', {
        templateUrl: 'jobs.html',
        controller: 'JobsController'
      })
      .when('/contacts', {
        templateUrl: 'contacts.html',
        controller: 'ContactsController'
      })
      .when('/companies', {
        templateUrl: 'companies.html',
        controller: 'CompaniesController'
      })
  })

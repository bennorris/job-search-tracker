function GetJobs ($http) {

  this.grabResults = function() {
    return $http.get('/all_jobs.json');
  }
}


angular
  .module('app')
  .service('GetJobs', GetJobs)

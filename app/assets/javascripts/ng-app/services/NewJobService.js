function NewJobService ($http) {
  var ctrl = this;

  ctrl.createJob = function (data) {
    $http.post('/new_job', data)
  }

}

angular
  .module('app')
  .service('NewJobService', NewJobService)

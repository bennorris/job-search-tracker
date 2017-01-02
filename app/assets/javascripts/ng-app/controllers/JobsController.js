function JobsController($scope, NewJobService, GetJobs, $http) {

  $scope.list = [];
  $scope.jobFormDisplay = "none";
  $scope.listDisplay = "none";
  $scope.url = 'https://s29.postimg.org/6eihjzjon/ravenna.png'
  $scope.bodyImage = {background: "url(" + $scope.url + ") "};
  var formOpen = false;
  var listOpen = false;
  $scope.applied = "darkgray";


  $scope.submit = function() {
    console.log(this);
      $scope.list.push(this.company);
      $scope.list.push(this.title);
      $scope.list.push(this.description);
      $scope.list.push(this.link);
      $scope.list.push(this.applied);

      $http.post('/new_job', $scope.list)
      // NewJobService
      //   .createJob($scope.list)
        .then(function(resp) {
            $scope.success = "Successfully Added!";
            $scope.company = '';
            $scope.title = '';
            $scope.link = '';
            $scope.description = '';
          })
        .catch(function(resp) {
          $scope.success = "Sorry, it seems that there was a problem."
          console.log(resp);
        })
  }

  $scope.showJobs = function() {
    if (formOpen === false) {
    $scope.jobFormDisplay = "inline";
    formOpen = !formOpen;
   }
   else {
     $scope.jobFormDisplay = "none";
     formOpen = !formOpen;
   }
   if (listOpen == true) {
     $scope.listDisplay = "none";
     listOpen = !listOpen;
   }
  }

  $scope.appendJobs = function () {
    GetJobs
      .grabResults()
      .then(function(res) {
        console.log(res.data);
        $scope.jobList = res.data;
      })
    if (formOpen === true) {
      $scope.jobFormDisplay = "none";
      formOpen = !formOpen;
    }
    if (listOpen === false) {
      $scope.listDisplay = "block";
      listOpen = !listOpen;
    } else {
      $scope.listDisplay = "none";
      listOpen = !listOpen;
    }
  }

  $scope.applied = function (val) {
    return val.applied == "yes";
  }

  $scope.notApplied = function (val) {
    return val.applied == "no";
  }

  $scope.applicationStatus = function(job) {
    if (job.applied == "no") {
      return "darkgray";
    } else if (job.applied == "yes") {
      return "green";
    }
  }

}

angular
  .module('app')
  .controller('JobsController', JobsController)

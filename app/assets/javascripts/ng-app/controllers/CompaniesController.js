function CompaniesController ($scope, $http) {

  $scope.companyForm = "none";
  $scope.url = 'https://s24.postimg.org/qy3txxijp/vz07w73ta_k_mike_wilson.jpgob-';
  $scope.bodyImage = {background: "url(" + $scope.url + ") no-repeat fixed center center / cover"};
  $scope.list = [];
  $scope.noteHide = "none";


  $scope.activateForm = function() {
    if ($scope.companyForm == "none") {
      $scope.companyForm = "inline";
    } else if ($scope.companyForm == "inline") {
      $scope.companyForm = "none";
    }
  }

  $scope.getCompanies = function() {
    $scope.companyForm = "none";

    $http.get('/all_companies.json')
    .then(function(res){
      $scope.companies = res.data;
    })
  }

  $scope.createCompany = function() {
    $scope.list.push(this.name);
    $scope.list.push(this.website);
    $scope.list.push(this.description);
    $scope.list.push(this.notes);

    $http.post('/new_company', $scope.list)
    .then(function(res) {
      $scope.name = '';
      $scope.website = '';
      $scope.description = '';
      $scope.notes = '';
    })
  }

  $scope.showNoteForm = function() {
    $scope.noteHide = "inline";
    $scope.editDisplay = "none";
  }

}

angular
  .module('app')
  .controller('CompaniesController', CompaniesController)

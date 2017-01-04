function ContactsController ($scope, $http, $timeout) {
  $scope.list = [];
  $scope.success = '';
  $scope.contacts = [];
  $scope.contactForm = "none";
  $scope.listDisplay = "none";
  $scope.url = 'https://s28.postimg.org/eamij9uot/tusn3pnex1u_chuttersnap.jpg';
  $scope.bodyImage = {background: "url(" + $scope.url + ") no-repeat fixed center center / cover"};
  $scope.noteHide = "display: none";
  $scope.editDisplay = ""

  $scope.createContact = function() {
    $scope.list.push(this.name);
    $scope.list.push(this.company);
    $scope.list.push(this.email);
    $scope.list.push(this.notes);
    $scope.list.push(this.contacted);


    $http.post('/new_contact', $scope.list)
    .then(function(res) {
      $timeout(function () { $scope.success = 'Contact Successfully Created!'; }, 1000);
      $scope.name = '';
      $scope.company = '';
      $scope.email = '';
      $scope.notes = '';
      $scope.contacted = '';
    })
  }

    $scope.getContacts = function() {
      $scope.contactForm = "none";
      if ($scope.listDisplay == "none") {
        $http.get('/all_contacts.json')
        .then(function(res) {
          $scope.contacts = res.data;
        })
        $scope.listDisplay = "inline";
    } else {
      $scope.listDisplay = "none";
    }
  }

    $scope.activateForm = function() {
      $scope.listDisplay = "none";

      if ($scope.contactForm == "inline") {
      $scope.contactForm = "none";
    } else if ($scope.contactForm == "none") {
      $scope.contactForm = "inline";
     }
  }


  $scope.showNoteForm = function() {
    $scope.noteHide = "display: inline";
    $scope.editDisplay = "display: none";
  }


}

angular
  .module('app')
  .controller('ContactsController', ContactsController)

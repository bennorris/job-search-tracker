function CompanyFilter () {
  return function(items) {
    var filtered = []
    for (var i = 0; i < items.length; i++) {
      if (items[i].showme == 'true') {
        filtered.push(items[i]);
      }
  }
    return filtered;
  }

}


angular
  .module('app')
  .filter('companyFilter', CompanyFilter)

(function() {
  angular.module('neSwapi.directive', ['neSwapi.service'])
  .directive('swapiDisplay', swapiDisplay);

  // dependencies
  swapiDisplay.$inject = ['swapi'];

  function swapiDisplay(swapi) {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'ne-swapi.template.html',
      link: link
    }

    return directive;

    function link(scope, element, attrs) {
      swapi.people.all()
      .then(function(allPeople) {
        scope.people = allPeople.results;
        scope.count = allPeople.count;
      });
    };
  }

})();

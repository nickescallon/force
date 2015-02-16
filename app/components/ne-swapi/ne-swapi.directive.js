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
        scope.peopleCount = allPeople.count;
      })
      .then(function() {
        swapi.films.all()
        .then(function(allFilms) {
          scope.films = allFilms.results;
          scope.filmsCount = allFilms.count;
        })
      })
      .then(function() {
        swapi.starships.all()
        .then(function(allStarships) {
          scope.starships = allStarships.results;
          scope.starshipsCount = allStarships.count;
        })
      })
      .then(function() {
        swapi.vehicles.all()
        .then(function(allVehicles) {
          scope.vehicles = allVehicles.results;
          scope.vehicleCount = allVehicles.count;
        })
      })
      .then(function() {
        swapi.species.all()
        .then(function(allSpecies) {
          scope.species = allSpecies.results;
          scope.speciesCount = allSpecies.count;
        })
      })
      .then(function() {
        swapi.planets.all()
        .then(function(allPlanets) {
          scope.planets = allPlanets.results;
          scope.planetsCount = allPlanets.count;
        })
      });
    }
  }

})();

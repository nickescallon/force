(function() {
  angular.module('neSwapi.service', [
    'neSwapi.people',
    'neSwapi.films',
    'neSwapi.starships',
    'neSwapi.vehicles',
    'neSwapi.species',
    'neSwapi.planets'
  ])
  .factory('swapi', swapi);

  swapi.$inject = ['swapiPeople', 'swapiFilms', 'swapiStarships', 'swapiVehicles', 'swapiSpecies', 'swapiPlanets'];
  function swapi(swapiPeople, swapiFilms, swapiStarships, swapiVehicles, swapiSpecies, swapiPlanets) {

    var service = {
      info: 'SWAPI INFO FROM SERVICE',
      people: swapiPeople,
      films: swapiFilms,
      starships: swapiStarships,
      vehicles: swapiVehicles,
      species: swapiSpecies,
      planets: swapiPlanets
    };

    return service;
  }

})();

(function() {
  angular.module('neSwapi.constants', [])
  .constant('SWAPI', SWAPI());

  function SWAPI() {
    var base = 'https://swapi.co/api/',
        people = 'people/'

    return {
      BASE_URL: base,
      PEOPLE_URL: base + people
    };
  };
})();

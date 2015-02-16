(function() {
  angular.module('neSwapi.service', ['neSwapi.people'])
  .factory('swapi', swapi);

  // dependencies
  swapi.$inject = ['swapiPeople'];

  function swapi(swapiPeople) {

    var service = {
      info: 'SWAPI INFO FROM SERVICE',
      people: swapiPeople
    };

    return service;
  };

})();

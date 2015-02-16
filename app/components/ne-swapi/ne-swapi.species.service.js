(function() {
  angular.module('neSwapi.species', ['neSwapi.apiHelpers', 'neSwapi.constants'])
  .factory('swapiSpecies', swapiSpecies);

  swapiSpecies.$inject = ['apiHelpers', 'ENDPOINTS'];
  function swapiSpecies(apiHelpers, ENDPOINTS) {

    var service = {
      byId: byId,
      byPage: byPage,
      all: all
    };

    return service;

    function byId(id) {
      return apiHelpers.getRecord(ENPOINTS.SPECIES, id);
    }

    function byPage(pageNumber) {
      return apiHelpers.getPaged(ENDPOINTS.SPECIES, pageNumber);
    }

    function all() {
      return apiHelpers.getAll(ENDPOINTS.SPECIES);
    }

  }

})();

(function() {
  angular.module('neSwapi.planets', ['neSwapi.apiHelpers', 'neSwapi.constants'])
  .factory('swapiPlanets', swapiPlanets);

  swapiPlanets.$inject = ['apiHelpers', 'ENDPOINTS'];
  function swapiPlanets(apiHelpers, ENDPOINTS) {

    var service = {
      byId: byId,
      byPage: byPage,
      all: all
    };

    return service;

    function byId(id) {
      return apiHelpers.getRecord(ENPOINTS.PLANETS, id);
    }

    function byPage(pageNumber) {
      return apiHelpers.getPaged(ENDPOINTS.PLANETS, pageNumber);
    }

    function all() {
      return apiHelpers.getAll(ENDPOINTS.PLANETS);
    }

  }

})();

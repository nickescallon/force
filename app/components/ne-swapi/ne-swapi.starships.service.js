(function() {
  angular.module('neSwapi.starships', ['neSwapi.apiHelpers', 'neSwapi.constants'])
  .factory('swapiStarships', swapiStarships);

  swapiStarships.$inject = ['apiHelpers', 'ENDPOINTS'];
  function swapiStarships(apiHelpers, ENDPOINTS) {

    var service = {
      byId: byId,
      byPage: byPage,
      all: all
    };

    return service;

    function byId(id) {
      return apiHelpers.getRecord(ENPOINTS.STARSHIPS, id);
    }

    function byPage(pageNumber) {
      return apiHelpers.getPaged(ENDPOINTS.STARSHIPS, pageNumber);
    }

    function all() {
      return apiHelpers.getAll(ENDPOINTS.STARSHIPS);
    }

  }

})();

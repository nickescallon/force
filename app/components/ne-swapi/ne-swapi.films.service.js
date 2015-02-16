(function() {
  angular.module('neSwapi.films', ['neSwapi.apiHelpers', 'neSwapi.constants'])
  .factory('swapiFilms', swapiFilms);

  swapiFilms.$inject = ['apiHelpers', 'ENDPOINTS'];
  function swapiFilms(apiHelpers, ENDPOINTS) {

    var service = {
      byId: byId,
      byPage: byPage,
      all: all
    };

    return service;

    function byId(id) {
      return apiHelpers.getRecord(ENPOINTS.FILMS, id);
    }

    function byPage(pageNumber) {
      return apiHelpers.getPaged(ENDPOINTS.FILMS, pageNumber);
    }

    function all() {
      return apiHelpers.getAll(ENDPOINTS.FILMS);
    }

  }

})();

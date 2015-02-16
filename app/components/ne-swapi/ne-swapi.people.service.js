(function() {
  angular.module('neSwapi.people', ['neSwapi.apiHelpers', 'neSwapi.constants'])
  .factory('swapiPeople', swapiPeople);

  swapiPeople.$inject = ['apiHelpers', 'ENDPOINTS'];
  function swapiPeople(apiHelpers, ENDPOINTS) {

    var service = {
      byId: byId,
      byPage: byPage,
      all: all
    };

    return service;

    function byId(id) {
      return apiHelpers.getRecord(ENPOINTS.PEOPLE, id);
    }

    function byPage(pageNumber) {
      return apiHelpers.getPaged(ENDPOINTS.PEOPLE, pageNumber);
    }

    function all() {
      return apiHelpers.getAll(ENDPOINTS.PEOPLE);
    }

  }

})();

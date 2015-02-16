(function() {
  angular.module('neSwapi.people', ['neSwapi.constants'])
  .factory('swapiPeople', swapiPeople);

  // dependencies
  swapiPeople.$inject = ['$http', '$q', 'SWAPI'];

  function swapiPeople($http, $q, SWAPI) {

    var service = {
      all: all,
      byPage: byPage,
      byId: byId
    };

    return service;

    //write a paging service?
    function byPage(pageNumber) {
      var deferred = $q.defer();

      if (typeof pageNumber !== 'number') {
        //we use the detail key because that's how the api responds with errors. pull that out to error service?
        deferred.reject({detail: 'please enter a valid page number'});
      } else {
        $http.get(SWAPI.PEOPLE_URL + '?page=' + pageNumber)
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });
      }

      return deferred.promise;
    };

    //write an all service?
    function all() {
      var deferred = $q.defer(),
          results = [];

      getPeople();

      return deferred.promise;

      function getPeople(url) {
        $http.get(url || SWAPI.PEOPLE_URL)
        .then(function(response) {
          results = results.concat(response.data.results);

          if (typeof response.data.next === 'string') {
            getPeople(response.data.next);
          } else {
            deferred.resolve({ count: results.length, results: results });
          }
        })
        .catch(function(error) {
          deferred.reject(error);
        });
      };
    };

    function byId(id) {
      var deferred = $q.defer();

      if (typeof id !== 'number') {
        //we use the detail key because that's how the api responds with errors. pull that out to error service?
        deferred.reject({detail: 'please enter a valid id'});
      } else {
        $http.get(SWAPI.PEOPLE_URL + id + '/')
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });
      }

      return deferred.promise;
    };

  };

})();

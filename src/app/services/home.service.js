(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService($http) {

    function fetchData(url) {
      const requestObj = { 
        method: 'GET', 
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(requestObj);
    }

    const service = { 
      fetchData
    };

    return service; // exposes API
  }
})();
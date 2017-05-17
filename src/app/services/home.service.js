(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService($http) {
    // let getTodos = () => {
    //   const url = 'app/data/todos.json';
    //   const requestObj = { 
    //     method: 'GET', 
    //     url: url,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   };
      
    //   return $http(requestObj); // returns a promise
    // };
    
    // const service = { 
    //   getTodos
    // };

    // return service; // exposes API
  }
})();
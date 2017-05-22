(function() {
  'use strict';
  angular
    .module('services')
    .factory('authenticationService', authenticationService);

  function authenticationService() {

    // mocks a backend login API (using 'id' for dual factor authentication instead of password)
    let getUser = (users) => _.find(users, (user) => user.name === 'Josh' && user.id === 1); 
    
    const service = { 
      getUser
    };

    return service;
  }
})();
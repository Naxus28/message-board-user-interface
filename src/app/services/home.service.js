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

    function getContacts(users, contactsIds) {
      return users.filter( (user) => _.find(contactsIds, (id) => id === user.id));
    }
    
    function getMessageDataForUser(messages, userId) {
      return _.find(messages, (message) => message.owner.id === userId);
    }

    function mergeMessageDataIntoUserObj(users, messages) {
      return users.map( (user) => {
        let msgDataForUserObj = {
          messageData: getMessageDataForUser(messages, user.id)
        };

        Object.assign(user, msgDataForUserObj);
        
        return user;
      });
    }

    const service = { 
      fetchData,
      getContacts,
      mergeMessageDataIntoUserObj
    };

    return service; // exposes API
  }
})();
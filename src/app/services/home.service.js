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

    function getMessageData(messages, userId) {
      return _.find(messages, (message) => message.owner.id === userId);
    }


    function mergeMessageDataIntoUserObj(users, messages) {
      return users.map( (user) => {
        let msgData = getMessageData(messages, user.id);
        user['messageData'] = {};
        Object.assign(user.messageData, msgData);
        
        return user;
      });
      
    }

    const service = { 
      fetchData,
      mergeMessageDataIntoUserObj
    };

    return service; // exposes API
  }
})();
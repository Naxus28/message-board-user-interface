(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService($http) {

    let fetchData = (url) => {
      const requestObj = { 
        method: 'GET', 
        url: url,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(requestObj);
    };

    let getContacts = (users, contactsIds) => users.filter( (user) => _.find(contactsIds, (id) => id === user.id));
    
    let getMessageDataForUser = (messages, userId) => _.find(messages, (message) => message.owner.id === userId);

    let mergeMessageDataIntoUserObj = (users, messages) => {
      return users.map( (user) => {
        let msgDataForUserObj = {
          messageData: getMessageDataForUser(messages, user.id)
        };

        return Object.assign({}, user, msgDataForUserObj); // avoid mutation of user obj
      });
    };

    const service = { 
      fetchData,
      getContacts,
      mergeMessageDataIntoUserObj
    };

    return service; // exposes API
  }
})();
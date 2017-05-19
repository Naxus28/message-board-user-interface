(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService() {
    const dashStats = [
      {
        category: 'New Clients',
        time: 'Last 7 days',
        number: 25,
        faIconClass: 'user'
      },
      {
        category: 'New Work Orders',
        time: 'Last 24 hours',
        number: 13,
        faIconClass: 'map-marker'
      },
      {
        category: 'New Quotes',
        time: 'Last Month',
        number: 249,
        faIconClass: 'list-ul'
      },
      {
        category: 'New Invoices',
        time: 'Today',
        number: 68,
        faIconClass: 'bars'
      },
      {
        category: 'Open Cases',
        time: 'Since Launch',
        number: 1868,
        faIconClass: 'th'
      }
    ];

    const followers = [
      { 
        id: 1,
        name: 'user1' 
      },
      { 
        id: 2,
        name: 'user2' 
      },
      { 
        id: 3,
        name: 'user3' 
      },
      { 
        id: 4,
        name: 'user4' 
      },
      { 
        id: 5,
        name: 'user5' 
      },
      { 
        id: 6,
        name: 'user6' 
      },
      { 
        id: 7,
        name: 'user7' 
      }
    ];

    const following = [
      { 
        id: 4,
        name: 'user4' 
      },
      { 
        id: 3,
        name: 'user3' 
      },
      { 
        id: 7,
        name: 'user7' 
      },
      { 
        id: 6,
        name: 'user6' 
      },
      { 
        id: 1,
        name: 'user1' 
      },
      { 
        id: 2,
        name: 'user2' 
      },
      { 
        id: 5,
        name: 'user5' 
      }
    ];


    let getFollowers = () => followers;
    let getFollowing = () => following;
    let getDashStats = () => dashStats;
      
    //   return $http(requestObj); // returns a promise
    // };
    
    const service = { 
      getDashStats,
      getFollowers,
      getFollowing
    };

    return service; // exposes API
  }
})();
(function() {
  'use strict';
  angular
    .module('services')
    .factory('homeService', homeService);

  function homeService($http) {
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
        faIconClass: 'marker'
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
    let getDashStats = () => dashStats;
      
    //   return $http(requestObj); // returns a promise
    // };
    
    const service = { 
      getDashStats
    };

    return service; // exposes API
  }
})();
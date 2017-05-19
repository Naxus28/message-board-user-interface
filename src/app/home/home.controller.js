(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(homeService, $log) {
    let vm = this;

    (function fetchUsersData() {

      homeService.fetchData('app/data/dash-stats.json')
      .then(
        res => vm.dashStats = res.data.dashStats,
        err => $log('Error: ', err)
      );
      
      homeService.fetchData('app/data/users.json')
      .then(
        res => vm.users = res.data.users,
        err => $log('Error: ', err)
      );

      homeService.fetchData('app/data/messages.json')
      .then(
        res => {
          vm.messages = res.data.messages;
        },
        err => $log('Error: ', err)
      );

    })();
  }
})();
(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($log, homeService, authenticationService) {
    let vm = this;

    (function fetchUsersData() {

      homeService.fetchData('app/data/dash-stats.json')
      .then(
        res => vm.dashStats = res.data.dashStats,
        err => $log('Error: ', err)
      );
      
      homeService.fetchData('app/data/users.json')
      .then(
        res => {
          vm.users = res.data.users;
          vm.currentUser = authenticationService.getUser(res.data.users);
          vm.followers = homeService.getContacts(vm.users, vm.currentUser.network.followerIds);
          vm.following = _.reverse(homeService.getContacts(vm.users, vm.currentUser.network.followingIds));
        },
        err => $log('Error: ', err)
      );

      homeService.fetchData('app/data/messages.json')
      .then(
        res => vm.messages = res.data.messages,
        err => $log('Error: ', err)
      );
    })();
  }
})();
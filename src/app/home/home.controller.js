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
        res => {
          vm.users = res.data.users;
          let thisUser = _.find(res.data.users, (user) => user.id === 1); // mocks a user login
          vm.followers = homeService.getContacts(vm.users, thisUser.network.followerIds);
          vm.following = _.reverse(homeService.getContacts(vm.users, thisUser.network.followingIds));
        },
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
(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(homeService) {
    let vm = this;
    vm.dashStats = homeService.getDashStats();
    vm.followers = homeService.getFollowers(),
    vm.following = homeService.getFollowing();
  }
})();
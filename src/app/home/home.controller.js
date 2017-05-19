(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(homeService) {
    let vm = this;
    vm.dashStats = homeService.getDashStats();
    console.log(vm.dashStats);
  }
})();
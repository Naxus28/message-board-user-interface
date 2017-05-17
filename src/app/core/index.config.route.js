(function () {
  'use strict';

  angular
    .module('userInterface')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
  }
})();
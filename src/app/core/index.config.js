(function () {
  'use strict';

  angular
    .module('userInterface')
    .config(config);

  function config($logProvider, $locationProvider) {
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);
  }
})();




    
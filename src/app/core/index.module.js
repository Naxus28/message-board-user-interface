(function () {
  'use strict';
  
  angular.module('userInterface', [
    /**
     * angular modules
     */
    // 'ngAnimate',

    /**
     * external libraries
     */
    'ui.router',

    /**
     * main modules
     */
    'home',
    'error',

    /**
     * directives
     */
    'directives',

    /**
     * services
     */
    'services'
  ]);
})();
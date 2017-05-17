(function () {
  'use strict';
  
  angular.module('userInterface', [
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
(function() {
  'use strict';
  angular
    .module('directives')
    .directive('dashMainContentDirective', dashMainContentDirective);

  /* @nginject */
  function dashMainContentDirective () {
    return {
      restrict: '',
      link: link,
      replace: true,
      scope: {},
      templateUrl: 'app/directives/dash-main-content/dash-main-content.html'
    };

    function link() {

    }
  }
})();
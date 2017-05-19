(function() {
  'use strict';
  angular
    .module('directives')
    .directive('dashStatsDirective', dashStatsDirective);

  /* @nginject */
  function dashStatsDirective () {
    return {
      restrict: 'E',
      link: link,
      replace: true,
      scope: {
        category: '=',
        faIconClass: '@',
        date: '@',
        stats: '='
      },
      templateUrl: 'app/directives/dash-stats/dash-stats.html'
    };

    function link() {

    }
  }
})();
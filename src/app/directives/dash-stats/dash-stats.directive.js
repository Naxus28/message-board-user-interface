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
        dashStats: '='
      },
      templateUrl: 'app/directives/dash-stats/dash-stats.html'
    };

    function link(scope) {
      console.log('scope: ', scope);
      scope.stats = scope.dashStats;
    }
  }
})();
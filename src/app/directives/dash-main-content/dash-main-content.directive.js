(function() {
  'use strict';
  angular
    .module('directives')
    .directive('dashMainContentDirective', dashMainContentDirective);

  /* @nginject */
  function dashMainContentDirective (homeService) {
    return {
      restrict: 'E',
      link: link,
      replace: true,
      scope: {
        users: '=',
        messages: '='
      },
      templateUrl: 'app/directives/dash-main-content/dash-main-content.html'
    };

    function link(scope) {
      scope.users = homeService.mergeMessageDataIntoUserObj(scope.users, scope.messages);

      console.log('msgs: ', scope.users);

    }

  }
})();
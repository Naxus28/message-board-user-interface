(function() {
  'use strict';
  angular
    .module('directives')
    .directive('messageBoardDirective', messageBoardDirective);

  /* @nginject */
  function messageBoardDirective (homeService) {
    return {
      restrict: 'E',
      link: link,
      replace: true,
      scope: {
        users: '=',
        messages: '=',
        currentUser: '='
      },
      templateUrl: 'app/directives/message-board/message-board.html'
    };

    function link(scope) {
      scope.users = homeService.mergeMessageDataIntoUserObj(scope.users, scope.messages);
    }
  }
})();
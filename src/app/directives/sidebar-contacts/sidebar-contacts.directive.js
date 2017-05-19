(function() {
  'use strict';
  angular
    .module('directives')
    .directive('sidebarContactsDirective', sidebarContactsDirective);

  /* @nginject */
  function sidebarContactsDirective () {
    return {
      restrict: '',
      link: link,
      replace: true,
      scope: {
        contacts: '='
      },
      templateUrl: 'app/directives/sidebar-contacts/sidebar-contacts.html'
    };

    function link(scope) {
      console.log(scope.contacts);
    }
  }
})();
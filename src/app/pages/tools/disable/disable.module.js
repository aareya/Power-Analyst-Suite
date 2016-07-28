/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('PowerAnalyst.pages.tools.disable', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('tools.disable', {
        url: '/disable',
        templateUrl: 'app/pages/tools/disable/disable.html',
        controller: 'DisableCtrl',
        title: 'Disable Accounts',
        sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();

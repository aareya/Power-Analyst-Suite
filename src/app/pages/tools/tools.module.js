/**
 * @author v.young
 * created on 19.07.2016
 */
(function () {
  'use strict';

  angular.module('PowerAnalyst.pages.tools', [
    'PowerAnalyst.pages.tools.disable',
    //'PowerAnalyst.pages.components.timeline',
    //'PowerAnalyst.pages.components.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tools', {
          url: '/tools',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Tools',
          sidebarMeta: {
            icon: 'ion-cube',
            order: 50,
          },
        });
  }

})();

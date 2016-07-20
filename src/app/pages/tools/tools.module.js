/**
 * @author v.young
 * created on 19.07.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tools', [
    'BlurAdmin.pages.tools.disable',
    //'BlurAdmin.pages.components.timeline',
    //'BlurAdmin.pages.components.tree',
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

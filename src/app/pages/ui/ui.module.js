/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('PowerAnalyst.pages.ui', [
    'PowerAnalyst.pages.ui.typography',
    'PowerAnalyst.pages.ui.buttons',
    'PowerAnalyst.pages.ui.icons',
    'PowerAnalyst.pages.ui.modals',
    'PowerAnalyst.pages.ui.grid',
    'PowerAnalyst.pages.ui.alerts',
    'PowerAnalyst.pages.ui.progressBars',
    'PowerAnalyst.pages.ui.notifications',
    'PowerAnalyst.pages.ui.tabs',
    'PowerAnalyst.pages.ui.slider',
    'PowerAnalyst.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();

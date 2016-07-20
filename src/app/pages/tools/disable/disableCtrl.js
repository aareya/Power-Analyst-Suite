/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tools.disable')
      .controller('DisableCtrl', DisableCtrl);

  /** @ngInject */
  function DisableCtrl($scope) {
    $scope.default = {opt_Account: "renamed_admin", chk_Account: true};
    $scope.reset = function () {
      $scope.current = angular.copy($scope.default);
    };
    $scope.reset();
  }
})();

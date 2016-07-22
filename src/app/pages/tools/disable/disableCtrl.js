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
    $scope.default = {opt_Account: "renamed_admin", chk_Account: true, txt_Console: "Console output will appear here..."};
    $scope.reset = function () {
      $scope.current = angular.copy($scope.default);
    };
    $scope.reset();
    $scope.console_clear = function () {
      $scope.current.txt_Console = angular.copy($scope.default.txt_Console);
    };
    $scope.console_test = function () {
      $scope.current.txt_Console = "Testing 123";
    };
  }
})();

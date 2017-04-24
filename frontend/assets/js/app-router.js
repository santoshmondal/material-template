var app = angular.module("app", ['ngMaterial', 'ui.router', 'ngMdIcons']);


app.controller("first", ["$scope", function($scope) {
    $scope.hello = "Hello World";
}]);
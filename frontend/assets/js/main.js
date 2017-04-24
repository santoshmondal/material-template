var app = angular.module("app");

app.controller("homeCtrl", ["$scope", function($scope) {
    $scope.hello = "Hello World";
}]);
var app = angular.module("app", ["ngMaterial"]);

app.controller("first", ["$scope", function($scope) {
    $scope.hello = "Hello World";
}]);
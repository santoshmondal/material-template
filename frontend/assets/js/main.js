var app = angular.module("app");

app.controller("homeCtrl", ["$scope", "COMMON_SERVICE", function($scope, COMMON_SERVICE) {

    $scope.user = {};
    $scope.authLogin = function() {
        console.log($scope.user);

        var user = $scope.user;
        if (user.name == 'admin' && user.password == 'amdin') {
            COMMON_SERVICE.USER_META = user;

            // save at local storage
            localStorage.setItem('USER_META', JSON.stringify(user));
        } else {
            user.errorMessage = "Authentication Fails";
        }
    };


    // get userJson from localstorage;
    $scope.onPageRefreshUpdateUserMeta = function() {
        // READ FROM LOCAL STORAGE && RETURN USER META.
        var userMetaStr = localStorage.getItem('USER_META');
        var userMetaObj = angular.fromJson(userMetaStr);

        if (userMetaObj && userMetaObj.user) {
            $scope.LOGGED_IN = true;

            COMMON_SERVICE.USER_META = userMetaObj;
        } else {
            $scope.LOGGED_IN = false;
        }
    };
    $scope.onPageRefreshUpdateUserMeta();

}]);
var app = angular.module("app");

app.controller("homeCtrl", ["$scope", "NgTableParams", "COMMON_SERVICE", function($scope, NgTableParams, COMMON_SERVICE) {

    $scope.getData = function() {
        $scope.dataList = new NgTableParams({ "count": 15 }, {
            "counts": [5, 10, 15, 20],
            "dataset": COMMON_SERVICE.getDataList()
        });
    };


    $scope.user = {};
    $scope.authLogin = function() {
        console.log($scope.user);

        var user = $scope.user;
        if (user.name == 'admin' && user.password == 'admin') {
            COMMON_SERVICE.USER_META = user;

            // save at local storage
            localStorage.setItem('USER_META', JSON.stringify(user));

            $scope.LOGGED_IN = true;

            $scope.getData();
        } else {
            user.errorMessage = "Authentication Fails";
        }
    };


    // get userJson from localstorage;
    $scope.onPageRefreshUpdateUserMeta = function() {
        // READ FROM LOCAL STORAGE && RETURN USER META.
        var userMetaStr = localStorage.getItem('USER_META');
        var userMetaObj = angular.fromJson(userMetaStr);

        if (userMetaObj) {
            $scope.LOGGED_IN = true;

            COMMON_SERVICE.USER_META = userMetaObj;

            $scope.getData();
        } else {
            $scope.LOGGED_IN = false;
        }
    };
    $scope.onPageRefreshUpdateUserMeta();

}]);
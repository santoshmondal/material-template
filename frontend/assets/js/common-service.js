var app = angular.module("app");

app.service("COMMON_SERVICE", [function() {

    // set on login
    this.USER_META = {};

    this.DATA_LIST = [
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
        { "name": "Abcd", "age": 11 },
    ];

}]);
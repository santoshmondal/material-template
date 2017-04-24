var app = angular.module("app", ['ngMaterial', 'ui.router', 'ngMdIcons']);

app.config(['$mdIconProvider', function($mdIconProvider) {
    // SVG Icon
    $mdIconProvider
        .iconSet('social', 'assets/svg/social-icons.svg', 24)
        .iconSet('image', 'assets/svg/image-icons.svg', 24)
        .iconSet('action', 'assets/svg/action-icons.svg', 24)
        .iconSet('file', 'assets/svg/file-icons.svg', 24)
        .iconSet('hardware', 'assets/svg/hardware-icons.svg', 24)
        .iconSet('navigation', 'assets/svg/navigation-icons.svg', 24)
        .iconSet('alert', 'assets/svg/alert-icons.svg', 24)
        .iconSet('content', 'assets/svg/content-icons.svg', 24)
        .iconSet('editor', 'assets/svg/editor-icons.svg', 24)
        .defaultIconSet("assets/svg/mdi.svg", 24);
}]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    });
}]);
var app = angular.module("app", ['ngMaterial', 'ui.router', 'ngMdIcons', 'ngTable']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light', // whether, by default, text (contrast)
        // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'
        ],
        'contrastLightColors': undefined // could also specify this if default was 'dark'
    });

    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('pink')
        .warnPalette('red')
        .backgroundPalette('blue-grey')
        .dark();

});


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
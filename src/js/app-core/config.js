let config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: './templates/layout.tpl.html',
            controller: 'AbstractCtrl as abstract'
        })
        .state('root.home', {
            url: '/',
            controller: 'HomeCtrl as vm',
            templateUrl: './templates/home.tpl.html'
        })
        .state('root.about', {
            url: '/about',
            controller: 'AboutCtrl as vm',
            templateUrl: './templates/about.tpl.html'
        })
        .state('root.watch', {
            url: '/watch',
            controller: 'VideoCtrl as vm',
            templateUrl: './templates/video.tpl.html'
        })
        ;
};   

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
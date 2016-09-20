let config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: './templates/view-containers/layout.tpl.html',
            controller: 'AbstractCtrl as abstract'
        })
        .state('root.home', {
            url: '/',
            controller: 'HomeCtrl as vm',
            templateUrl: './templates/view-containers/home.tpl.html'
        })
        .state('root.about', {
            url: '/about',
            controller: 'AboutCtrl as vm',
            templateUrl: './templates/view-containers/about.tpl.html'
        })
        .state('root.watch', {
            url: '/watch',
            controller: 'VideoCtrl as vm',
            templateUrl: './templates/view-containers/video.tpl.html'
        })
        .state('root.private', {
            url: '/private',
            controller: 'PrivateCtrl as vm',
            templateUrl: './templates/view-containers/private.tpl.html'
        });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
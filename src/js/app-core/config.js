let config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'index.html'
        })
        .state('root.home', {
            url: '/',
            controller: 'HomeCtrl as vm',
            templateUrl: './templates/home.tpl.html'
        })
        ;
};   

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
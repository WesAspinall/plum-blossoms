let homeContent = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            welcome: '=',
            schedule: '='
        },
        transclude: true,
        templateUrl: './templates/content/home-content.tpl.html'

    };

};
homeContent.$inject = [];

export default homeContent;
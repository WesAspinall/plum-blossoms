let mainContent = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            welcome: '=',
            schedule: '='
        },
        transclude: true,
        templateUrl: './templates/main-content.tpl.html'

    };

};
mainContent.$inject = [];

export default mainContent;
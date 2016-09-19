let hero = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            title: '='
        },
        transclude: true,
        templateUrl: './templates/hero.tpl.html',
    };

};

hero.$inject = [];

export default hero;
let hero = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            title: '='
        },
        transclude: true,
        templateUrl: './templates/content/hero.tpl.html',
    };

};

hero.$inject = [];

export default hero;
let aboutContent = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            title: '=',
            sifu: '='
        },
        transclude: true,
        templateUrl: './templates/content/about-content.tpl.html'

    };

};
aboutContent.$inject = [];

export default aboutContent;
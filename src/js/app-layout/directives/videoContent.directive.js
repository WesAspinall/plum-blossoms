let videoContent = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            title: '=',
            subtitle: '='
        },
        transclude: true,
        templateUrl: './templates/video-content.tpl.html'

    };

};
videoContent.$inject = [];

export default videoContent;
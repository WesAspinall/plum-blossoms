let privateLessonContent = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            title: '=',
            subtitle: '='
        },
        transclude: true,
        templateUrl: './templates/content/private-lesson.tpl.html'

    };

};
privateLessonContent.$inject = [];

export default privateLessonContent;
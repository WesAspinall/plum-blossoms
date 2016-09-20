let googleMaps = function($sce) {

    return {

        restrict: 'E',
        replace: true,
        scope: {
            width: '@',
            height: '@'
        },
        transclude: true,
        templateUrl: './templates/content/google-maps.tpl.html',

        link: function (scope,element,attrs) {
            scope.width = attrs.width;
            scope.height = attrs.height;
            scope.src = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBmMAeyQ9lHmpkZBDdYL-pl5i1Gjre-Xmg&q=place_id:ChIJhYHfr0C42YgRT_iCvqkkp20");

        }
    
    };

};

googleMaps.$inject = ['$sce'];

export default googleMaps;
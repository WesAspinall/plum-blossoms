import $ from 'jquery';

let sidePanel = function() {

    return {

        restrict: 'E',
        replace: true,
        scope: {},

        transclude: true,
        templateUrl: './templates/side-panel.tpl.html',

        link: function(scope, element, attrs) {
            $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
                $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
                e.preventDefault();
            });
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 50) {
                    $('.fa').addClass('fixed');
                } else {
                    $('.fa').removeClass('fixed');
                }
            });
        }
    };

};

sidePanel.$inject = [];

export default sidePanel;
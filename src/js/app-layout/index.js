import angular from 'angular';

//controllers
import HomeCtrl     from './controllers/HomeCtrl.controller';
import AbstractCtrl from './controllers/AbstractCtrl.controller';
import AboutCtrl    from './controllers/AboutCtrl.controller';
import VideoCtrl    from './controllers/VideoCtrl.controller';
import PrivateCtrl  from './controllers/PrivateCtrl.controller';

//directives
import hero         from './directives/hero.directive';
import homeContent  from './directives/homeContent.directive';
import aboutContent from './directives/aboutContent.directive';
import videoContent from './directives/videoContent.directive';
import sidePanel    from './directives/sidePanel.directive';
import privateLessonContent from './directives/privateLessonContent.directive';
import googleMaps   from  './directives/googleMaps.directive';

angular
    .module('app.layout', [])
    .controller('HomeCtrl', HomeCtrl)
    .controller('AbstractCtrl', AbstractCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller('VideoCtrl', VideoCtrl)
    .controller('PrivateCtrl', PrivateCtrl)
    .directive('hero', hero)
    .directive('homeContent', homeContent)
    .directive('aboutContent', aboutContent)
    .directive('videoContent', videoContent)
    .directive('sidePanel', sidePanel)
    .directive('privateLessonContent', privateLessonContent)
    .directive('googleMaps', googleMaps)
    ;
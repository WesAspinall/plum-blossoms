import angular from 'angular';

//controllers
import HomeCtrl from './controllers/HomeCtrl.controller';
import AbstractCtrl from './controllers/AbstractCtrl.controller';
import AboutCtrl from './controllers/AboutCtrl.controller';
import VideoCtrl from './controllers/VideoCtrl.controller';

//directives
import hero         from './directives/hero.directive';
import mainContent  from './directives/mainContent.directive';
import aboutContent from './directives/aboutContent.directive';
import videoContent from './directives/videoContent.directive';
import sidePanel    from './directives/sidePanel.directive';

angular
    .module('app.layout', [])
    .controller('HomeCtrl', HomeCtrl)
    .controller('AbstractCtrl', AbstractCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller('VideoCtrl', VideoCtrl)
    .directive('hero', hero)
    .directive('mainContent', mainContent)
    .directive('aboutContent', aboutContent)
    .directive('videoContent', videoContent)
    .directive('sidePanel', sidePanel)
    ;
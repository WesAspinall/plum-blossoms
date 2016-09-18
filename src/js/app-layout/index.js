import angular from 'angular';
import HomeCtrl from './controllers/HomeCtrl.controller';

angular
    .module('app.layout', [])
    .controller('HomeCtrl', HomeCtrl)
    ;
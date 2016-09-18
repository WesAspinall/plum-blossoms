import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import API from './constants/fileserver.constant';

angular
    .module('app.core', ['ui.router'])
    .config(config)
    .constant('API', API)
    ;
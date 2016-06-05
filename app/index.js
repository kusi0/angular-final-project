import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';

import todo from './features/todo';
import login from './features/login';


const ngModule = angular
        .module('app', [uirouter, login, todo])
        .config(routing);
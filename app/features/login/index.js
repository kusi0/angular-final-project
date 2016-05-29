import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';
import LoginService from './login.service.js';

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('LoginController', LoginController)
  .service('LoginService',LoginService)
  .name;

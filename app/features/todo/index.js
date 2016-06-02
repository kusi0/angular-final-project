import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './todo.routes';

import ToDoController from './todo.controller';

import taskInput from './directives/task-input';

export default angular.module('app.todo', [uirouter])
  .config(routing)
  .controller('ToDoController',ToDoController)
  .directive('taskInput', taskInput)
  .name;

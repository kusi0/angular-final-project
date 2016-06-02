import angular from 'angular';
import uirouter from 'angular-ui-router';


import routing from './todo.routes';

import ToDoController from './todo.controller';

import taskInput from './directives/task-input';
import taskList from './directives/task-list';

import angularFire from 'angularfire';
import firebase from 'firebase';


export default angular.module('app.todo', [uirouter,  angularFire])
  .config(routing)
  .controller('ToDoController',ToDoController)
  .directive('taskInput', taskInput)
  .directive('taskList', taskList)
  .name;

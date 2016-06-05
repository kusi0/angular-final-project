import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularFire from 'angularfire';
import angularFilter from 'angular-filter'

import routing from './todo.routes';

import ToDoController from './todo.controller';

import taskInput from './directives/task-input';
import taskList from './directives/task-list';



export default angular.module('app.todo', [uirouter, 'angular.filter', angularFire])
  .config(routing)
  .controller('ToDoController',ToDoController)
  .directive('taskInput', taskInput)
  .directive('taskList', taskList)
  .name;

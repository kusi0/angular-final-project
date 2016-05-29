export default function routes($stateProvider) {
  $stateProvider
    .state('todo', {
      url: '/todo',
      template: require('./todo.html'),
      controller: 'ToDoController',
      controllerAs: 'todo'
    });
}
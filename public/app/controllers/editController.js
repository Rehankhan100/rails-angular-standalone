// todoapp.controller('EditTodoCon/troller', function($scope) {
//    $scope.message = "This page will be used to display Edit form";
// });
angular.module("todoapp")
    .factory("Todo", function($resource) {
       return $resource("todos/:id", { id: '@id' }, {
          index:   { method: 'GET', isArray: true, responseType: 'json' },
          update:  { method: 'PUT', responseType: 'json' }
       });
    })
    .controller("EditTodoController", function($scope,$routeParams, Todo){
       $scope.todos = Todo.get({ id: $routeParams.id });

       $scope.editTodo = function() {
          if ($scope.todos.id != null) {
             Todo.update({ id: $routeParams.id },$scope.todos);
             location.href = "#/list";
          }
          return $scope.todos = {};
       };
    });


angular.module('todoapp')
.factory("Todo", function($resource) {
    return $resource("todos/:id", { id: '@id' }, {
        index:   { method: 'GET', isArray: true, responseType: 'json' },
        update:  { method: 'PUT', responseType: 'json' }
    });
})
.controller("AddTodoController", function($scope, Todo) {
    $scope.todos = Todo.index()

    $scope.addTodo = function() {
        todos = Todo.save($scope.newTodo)

        $scope.todos.push(todos)
        $scope.newTodo = {}
    }

    // $scope.deleteTodo = function(index) {
    //
    //     todo = $scope.todos[index]
    //     Todo.delete(todo)
    //     $scope.todos.splice(index, 1);
    // }
})













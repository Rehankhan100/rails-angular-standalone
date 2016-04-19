// TodoService.$inject = ['$resource'];
// function TodoService($resource) {
//   return $resource("todos/:id", { id: '@id' }, {
//     index:   { method: 'GET', isArray: true, responseType: 'json' },
//     show:    { method: 'GET', responseType: 'json' },
//     update:  { method: 'PUT', responseType: 'json' }
//  });
//  }
// // todoapp.factory('TodoService', TodoService);
// //
// // todoapp.controller('ListTodoController', ['$scope', 'Todo' , function($scope, Todo){
// //   $scope.message = "This page will be used to display List form";
// //
// //   Todo.index(function(response){
// //     $scope.data = response;
// //   })
// // }]);
// // TodoService.$inject = ['$resource'];
// // function TodoService($resource) {
// //   return $resource("todos/:id", { id: '@id' }, {
// //     index:   { method: 'GET', isArray: true, responseType: 'json' },
// //     show:    { method: 'GET', responseType: 'json' },
// //     update:  { method: 'PUT', responseType: 'json' }
// //  });
// //  }
// angular.module("todoapp.controllers",[]).
//   controller('ListTodoController', ['$scope', 'Todo', function($scope, Todo) {
//   // $http.get("todos/1").success(function(todo) {
//   //   $scope.todo = todo;
//   //   // $http.get("todos/" + todo.name + "/test").success(function(data) {
//   //   //     $scope.data = data;
//   //   // });
//   // });
//   Todo.index(function(response){
//       $scope.todo = response;
//     })
// // $scope.message = "This page will be used to display List form";
//   }]);
//
// // todoapp.controller('ListTodoController', ['$scope', 'Todo', function($scope, Todo) {
// // // $http.get("todos/1").success(function(todo) {
// // //   $scope.todo = todo;
// // //   // $http.get("todos/" + todo.name + "/test").success(function(data) {
// // //   //     $scope.data = data;
// // //   // });
// // // });
// // Todo.index(function(response){
// //     $scope.todo = response;
// //   })
// //
// // }]);
angular.module("todoapp")
.controller("ListTodoController", function($scope,$resource){
    // Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
    // $scope.posts = Post.query();
    Todo = $resource("todos/:id", { id: "@id" });
     $scope.todos = Todo.query();
});




// running method
// angular.module("todoapp")
// .controller("ListTodoController", function($scope,$resource){
//     Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
//     $scope.posts = Post.query();
//
// });

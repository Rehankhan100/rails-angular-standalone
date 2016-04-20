
var todoapp = angular.module("todoapp", ['ngRoute','ngResource']);
      todoapp.config(['$routeProvider', function($routeProvider) {
         $routeProvider.

         when('/edit', {
            templateUrl: 'app/views/edit.html',
            controller: 'EditTodoController'
         }).

         when('/view', {
            templateUrl: 'app/views/view.html',
            controller: 'ViewTodoController'
         }).

         when('/add', {
            templateUrl: 'app/views/add.html',
            controller: 'AddTodoController'
         }).

         when('/list', {
            templateUrl: 'app/views/list.html',
            controller: 'ListTodoController'
         }).

         otherwise({
            redirectTo: '/'
         });
      }]);



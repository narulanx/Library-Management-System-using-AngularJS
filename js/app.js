//declare main module and its dependencies
var mainModule = angular.module('MainModule', ['libraryModule', 'serviceModule', 'filterModule', 'directiveModule']);

mainModule.config(function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl: 'loginTemplate',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/home/student', {
		templateUrl: 'studentTemplate',
		controller: 'BookListCtrl_Student'
	});
	$routeProvider.when('/home/librarian', {
		templateUrl: 'librarianTemplate',
		controller: 'BookListCtrl_Librarian'
	});
	$routeProvider.when('/issue/:bookId', {
		templateUrl: 'issueBookTemplate',
		controller: 'IssueBookCtrl'
	});
	$routeProvider.when('/return/:bookId', {
		templateUrl: 'returnBookTemplate',
		controller: 'ReturnBookCtrl'
	});
	$routeProvider.when('/AddBook', {
		templateUrl: 'addBookTemplate',
		controller: 'AddBookCtrl'
	});
	$routeProvider.otherwise({
		redirectTo: '/main'
	});
});
//declare custom service module
var sm = angular.module('serviceModule', []);

//define custom service BookData
/*declare a function getData inside which you need to
 * make an ajax call to books.json and store the result.data to books model
 * inside rootScope.
 *
 */
 sm.service('BookData', function($http, $rootScope) {
 	return {
 		getData: function() {
 			var url = "data/books.json";

 			$http.get(url).success(function(response) {
 				$rootScope.books = response;
 			});
 		}
 	}
 });
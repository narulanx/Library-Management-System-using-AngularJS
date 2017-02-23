// declare custom filter module
var fm = angular.module('filterModule', []);

//add custom filter to filter data
/*
 * declare a custom filter 'filterunissued'.
 * the filter will accept the books and the viewbookoption selected by the user.
 * if the viewbookoption selected by the user is 'Available', then return a filtered
 * array of books. the filtered array should have only those books which have not
 * been issued.
 * if the viewbookoption selected is not 'Available', then return the initial array itself.
 */
 fm.filter('filterunissued', function() {
 	return function(books, viewbookoption) {
 		if (viewbookoption == 'Available') {
 			return books.filter(function(book) {
 				return !book.issued;
 			});
 		} else {
 			return books;
 		}
 	}
 });
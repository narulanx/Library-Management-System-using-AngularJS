//declare controller module
var libraryModule = angular.module('libraryModule', []);

/*
 * declare LoginCtrl
 * Code description for LoginCtrl:
        Method1:
            validate(user): validates entered username and password and alerts appropriate messages
 */
libraryModule.controller('LoginCtrl', function($scope, $http) {
	var url = "data/roles.json";
	$http.get(url).success(function(response) {
		$scope.data = response;
	});

	$scope.validate = function() {
		var found = false;
		angular.forEach($scope.data, function(user) {
			if (user.username == $scope.name && user.password == $scope.pass) {
				if (!found) {
					found = true;
				}
			}
		});
		if (found) {
			window.alert("Login Successful!");
		} else {
			window.alert("Please provide valid login credentials.")
		}
	}
});

/*
 * declare BookListCtrl
 * Code description for BookListCtrl:
        Hard code book details in json array and store this in a books model
 */
libraryModule.controller('BookListCtrl_Student', function($scope, $http) {
	$scope.title = "View Books";
	var url = "data/books.json";
	$http.get(url).success(function(response) {
		$scope.bookDetails = response;
	});
});


libraryModule.controller('BookListCtrl_Librarian', function($scope, $http) {
	$scope.title = "View Books";
	var url = "data/books.json";
	$http.get(url).success(function(response) {
		$scope.bookDetails = response;
	});
});

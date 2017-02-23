//declare controller module
var libraryModule = angular.module('libraryModule', []);

/*
 * declare LoginCtrl
 * Code description for LoginCtrl:
        Method1:
            validate(user): validates entered username and password and alerts appropriate messages
 */
libraryModule.controller('LoginCtrl', function($scope, $http, $rootScope, $location) {
	var url = "data/roles.json";
	$http.get(url).success(function(response) {
		$scope.data = response;
	});

	$scope.validate = function() {
		$rootScope.username = "";
		angular.forEach($scope.data, function(user) {
			if (user.username == $scope.name && user.password == $scope.pass) {
				$rootScope.username = $scope.name;
				$scope.role = user.role;
			}
		});
		if ($rootScope.username != "") {
			alert("Welcome " + $rootScope.username + "!");
			if ($scope.role == "student") {
				$location.path('/home/student');
			} else {
				$location.path('/home/librarian');
			}
		} else {
			alert("Invalid Credentials!");
			$scope.name = "";
			$scope.pass = "";
			$location.path('/main');
		}
	}
});

/*
 * Controller BookListCtrl_Student
 */
libraryModule.controller('BookListCtrl_Student', function($scope, BookData) {
	BookData.getData();

	$scope.title = "View Books";

	$scope.changeView = function() {
		BookData.getData();
	}
});

/*
 * Controller BookListCtrl_Librarian
 */
libraryModule.controller('BookListCtrl_Librarian', function($scope, $location, $rootScope, BookData) {
	if (!$rootScope.books) {
		BookData.getData();
	}

	$scope.title = "View Books";

	$scope.issue = function(bookId) {
		$location.path('/issue/' + bookId);
	}

	$scope.return = function(bookId) {
		$location.path('/return/' + bookId);
	}
});


/*
 * Controller IssueBookCtrl
 */
libraryModule.controller('IssueBookCtrl', function($scope, $routeParams, $rootScope, $location) {
	$scope.bookId = $routeParams.bookId;
	$scope.title = "Issue Books";
	$scope.book = $rootScope.books.find(function(b) {
		return b.bookId == $scope.bookId;
	});

	$scope.issue = function(bookId) {
		$scope.book.issued = true;
		alert("Book issued successfully!");
		$location.path('/home/librarian');
	}
});


/*
 * Controller ReturnBookCtrl
 */
libraryModule.controller('ReturnBookCtrl', function($scope, $routeParams, $rootScope, $location) {
	$scope.bookId = $routeParams.bookId;

	$scope.book = $rootScope.books.find(function(b) {
		return b.bookId == $scope.bookId;
	});

	$scope.return = function(bookId) {
		$scope.book.issued = false;
		alert("Book returned successfully!");
		$location.path('/home/librarian');
	}
});
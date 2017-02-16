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
libraryModule.controller('BookListCtrl', function($scope) {
	$scope.title = "View Books";
	$scope.bookDetails = [
	{
		"bookId": 101,
		"bookTitle": "Angular JS",
		"topic": "Angular JS",
		"author": "Green",
		"cost": 375,
		"imgUrl": "imgs/AngularJS1.JPG",
		"issued": true
	}, {
		"bookId": 102,
		"bookTitle": "Instant Angular JS Starter",
		"topic": "Angular JS",
		"author": "Dan Menard",
		"cost": 150,
		"imgUrl": "imgs/AngularJS2.JPG",
		"issued": true
	}, {
		"bookId": 103,
		"bookTitle": "Ng-Book: The Complete Book on AngularJS",
		"topic": "Angular JS",
		"author": "Ari Lerner",
		"cost": 4657,
		"imgUrl": "imgs/AngularJS3.JPG",
		"issued": false
	}, {
		"bookId": 104,
		"bookTitle": "Developing BackboneJS Applications",
		"topic": "BackboneJS",
		"author": "Addy Osmani",
		"cost": 650,
		"imgUrl": "imgs/BackboneJS1.JPG",
		"issued": false
	}, {
		"bookId": 105,
		"bookTitle": "Backbone.js Patterns and Best Practices",
		"topic": "BackboneJS",
		"author": "Swarnendu De",
		"cost": 390,
		"imgUrl": "imgs/BackboneJS2.JPG",
		"issued": false
	}, {
		"bookId": 107,
		"bookTitle": "Ember.js in Action",
		"topic": "EmberJS",
		"author": "Joachim Haagen Skeie",
		"cost": 2500,
		"imgUrl": "imgs/EmberJS1.JPG",
		"issued": false
	}, {
		"bookId": 108,
		"bookTitle": "Mastering Ember.js",
		"topic": "EmberJS",
		"author": "Mitchel Kelonye",
		"cost": 3500,
		"imgUrl": "imgs/EmberJS2.JPG",
		"issued": false
	}, {
		"bookId": 109,
		"bookTitle": "Developing an EmberJS Edge",
		"topic": "EmberJS",
		"author": "Jamie White and Matthew Beale",
		"cost": 2000,
		"imgUrl": "imgs/EmberJS2.JPG",
		"issued": false
	}, {
		"bookId": 110,
		"bookTitle": "Node.js in Action",
		"topic": "NodeJS",
		"author": "Mike Cantelon and Marc Harter",
		"cost": 800,
		"imgUrl": "imgs/NodeJS1.JPG",
		"issued": false
	}, {
		"bookId": 111,
		"bookTitle": "Node.js in the Right Way",
		"topic": "NodeJS",
		"author": "Jim R. Wilson",
		"cost": 1200,
		"imgUrl": "imgs/NodeJS2.JPG",
		"issued": false
	}, {
		"bookId": 112,
		"bookTitle": "Pro Node.js for Developers",
		"topic": "NodeJS",
		"author": "Colin Ihrig",
		"cost": 2800,
		"imgUrl": "imgs/NodeJS3.JPG",
		"issued": false
	}
	];
});

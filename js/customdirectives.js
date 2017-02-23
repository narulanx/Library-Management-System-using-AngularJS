// declare custom directive module
var dm = angular.module('directiveModule', []);

dm.directive('highlight', function() {
	return {
		restrict: 'EA',
		link: function(scope, element, attr) {
			element.bind('mouseover', mouseover);
			element.bind('mouseout', mouseout);

			function mouseover(event) {
				this.classList.add('highlight');
			}

			function mouseout(event) {
				this.classList.remove('highlight');
			}
		}
	}
});


/*add custom directive 'ngTopic' for custom validation
 *
 * validate if the value supplied is 'AngularJS' or 'BackboneJS' or 'EmberJS' or 'NodeJS'.
 * if not, set validity to false.
 * else, set validity to true.
 */

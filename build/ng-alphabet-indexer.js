/**
 * ngAlphabetIndexer: AlphabetIndexer for mobile development with AngularJS
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/ng-alphabet-indexer
 */

/**
 * @ngdoc module
 * @name ngAlphabetIndexer
 * @description ngAlphabetIndexer: AlphabetIndexer for mobile development with AngularJS
 * @example
   <doc:example>
     <doc:source>
        <script>
        var app = angular.module('myApp', ['ngAlphabetIndexer']);
        app.controller('MyCtrl', function($scope) {

        });
        </script>
        <alphabet-indexer></alphabet-indexer>
     </doc:source>
   </doc:example>
 */

var app = angular.module('ngAlphabetIndexer', []);
/**
 * ngAlphabetIndexer: AlphabetIndexer for mobile development with AngularJS
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/ng-alphabet-indexer
 */

/**
 * @ngdoc object
 * @name ngAlphabetIndexer.directive:ngAlphabetIndexer.ngAlphabetIndexerController
 *
 * @description
 * Each {@link ngAlphabetIndexer.directive:ngAlphabetIndexer ngAlphabetIndexer} directive creates an instance of `ngAlphabetIndexerController`
 */

var ngAlphabetIndexerController = [
	'$scope',
	'$log',
	function($scope, $log) {

		'use strict';

		$scope.addLetters = function(data) {
			$scope.contacts = data.concat(['A', 'B', 'C', 'D']);
		};
	}
];
/**
 * ngAlphabetIndexer: AlphabetIndexer for mobile development with AngularJS
 *
 * @author Matthieu COLLE
 * @url https://github.com/raiseandfall/ng-alphabet-indexer
 */

/**
 * @ngdoc directive
 * @name ngAlphabetIndexer.directive:alphabetIndexer
 * @restrict E
 *
 * @description
 * Directive that instantiates {@link ngAlphabetIndexer.directive:ngAlphabetIndexer.ngAlphabetIndexerController ngAlphabetIndexerController}.
 */

app.directive('ngAlphabetIndexer', [
	'$log',
	'$compile',
	function($log, $compile) {

		'use strict';

		return {
			restrict: 'E',
			scope: {
				ngContacts: '='
			},
			controller: ngAlphabetIndexerController,
			template: '<ul class="container" ng-controller="DemoCtrl">' +
      '<li ng-repeat="item in contacts | orderBy:\'firstName\'" ng-disabled="item.isDivider" ng-class="{divider:item.isDivider,item:!item.isDivider}">' +
        '<span>{{item.firstName}} {{item.lastName}}</span>' +
      '</li></ul>',
			link: function($scope, $attrs, $element, ctrl) {

				//$scope.addLetters($attrs.ngContacts);

			}
		};

	}
]);
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

		var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

		$scope.addLetters = function() {
			for (var i=0;i<alphabet.length;i++) {
				$scope.ngContacts.push({firstName:alphabet[i], lastName:'', isDivider: true});
			}
		};

		$scope.scrollToLetter = function(letter) {
			console.log('go to ' + letter);
		};

		$scope.alphabet = alphabet;
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
			templateUrl: '../src/partials/tpl.html',
      link: function($scope, $attrs, $element, ctrl) {

				// Add static letters dividers
				$scope.addLetters();

			}
		};

	}
]);
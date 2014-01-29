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
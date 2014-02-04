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
				listItems: '=',
				listOrderBy: '=',
				hideUnusedLetters: '='
			},
			controller: ngAlphabetIndexerController,
			template: '<ul class="lettersScrollBar">'+
									'<li class="scrollLetter" ng-repeat="letter in alphabet" ng-mouseenter="scrollToLetter(letter)">{{letter | uppercase}}</li>'+
								'</ul>',
      link: function($scope, $attrs, $element, ctrl) {

				// Add static letters dividers
				$scope.addLetters();

			}
		};

	}
]);
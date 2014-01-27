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
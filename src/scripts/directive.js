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
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
	'$compile',
	'$element',
	'$document',
	function($scope, $log, $compile, $elmt, $document) {

		'use strict';

		var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

		var list = $compile('<ul class="container">' +
			'<li ng-repeat="item in listItems | orderBy:listOrderBy" ng-disabled="item.isDivider" ng-class="{divider:item.isDivider,people:!item.isDivider}" id="{{item.id}}" ng-click="action({id:item.id})">' +
			'<span>{{item.firstName}} {{item.lastName}}</span>' +
			'</li></ul>')($scope);
		$elmt.append(list);

		var x = 0, y = 0, i = 0, all, lettersScrollBar, offsetLeft, offsetTop, li, liHeight;

		//
		// @function	addLetters
		//
		$scope.addLetters = function() {
			var firstLetters = [],
					hideUnusedLetters = $scope.hideUnusedLetters || false,
					i;
			if (hideUnusedLetters) {
				for (i = $scope.listItems.length - 1; i >= 0; i--) {
					firstLetters.push($scope.listItems[i].firstName[0].toUpperCase());
				}
			}

			for (i = alphabet.length - 1; i >= 0; i--) {
				if(!hideUnusedLetters || (hideUnusedLetters && firstLetters.indexOf(alphabet[i]) !== -1)){
					$scope.listItems.push({firstName:alphabet[i], lastName:'', isDivider: true, id:alphabet[i]});
				}
			}
			if (alphabet.length) {
				lettersScrollBar = $elmt.find('.lettersScrollBar');

				// TODO : fix issue on height of list container
				console.log('lettersScrollBar : ', lettersScrollBar.height());

				if (lettersScrollBar.height() > 0) {
					all = $elmt.find('.lettersScrollBar > li');
					var padding = parseInt(($elmt.find('.container').height() - lettersScrollBar.height())/52, 10);
					$elmt.find('.scrollLetter').css({'padding-top':padding+'px','padding-bottom':padding+'px'});
					$scope.addTouchBar();
				}
			}
		};

		//
		// @function	addTouchBar
		//
		$scope.addTouchBar = function() {
			all.on('touchstart mousedown', function(event) {
				all.removeClass('touched');
				$(this).addClass('touched');
				$scope.goto($(this).text());
			});

			offsetTop = lettersScrollBar.offset().top;
			offsetLeft = lettersScrollBar.offset().left;
			li = el.find('.letter');
			liHeight = li.height() + parseInt(li.css('padding-top'), 10) * 2;

			$element.on('mousedown touchstart', function(event) {

			});
		};

		//
		// @function	goto
		//
		$scope.goto = function(idx) {

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
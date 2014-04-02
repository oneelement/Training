'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', [function() {

	}])
	.controller('MyCtrl2', [function() {

	}])
	.controller('wowController', [function() {
	  	var pins = $('.pin'),
		    cols = 4,
		    colCount = 0,
		    colHeights = [0, 0, 0, 0];
		for (var i = pins.length - 1; i >= 0; i--) {
			$(pins[i]).css('top', colHeights[colCount] + 'px');
			colHeights[colCount] = colHeights[colCount] + $(pins[i]).height() + 10;
			$(pins[i]).css('left', ((colCount) * 110) + 'px');
			if (colCount < 3){
				colCount++;
			} else {
				colCount = 0;
			}
		};
	}]);
(function(){
	'use strict';

	/**
	* app Module
	*
	* Description
	*/
	var app = angular.module('myFactories', ['ngMaterial']);

	/*app.factory('myInterceptor', function($log){
		$log.debug('$log is here to show you that this is a regular factory with injection');
		return {
			request : function(config) {
				//console.log(config);
				return config;
			},
			response : function(res) {
				console.log(res);
			}
		};
	});*/

	app.factory('appUtils', ['$mdToast', '$state', function($mdToast, $state){

		var facObj = {};

    facObj.showToaster = function(msg, status, state){

        var theme_style = 'success-toast'; // Assuming 'success-toast' is configured to show green color

        var toast = $mdToast.simple()
            .textContent(msg)
            .action('x')
            .highlightAction(true)
            .theme(theme_style)
            .hideDelay(3000) // Adjust the delay as needed
            .position('center'); // Change the position here
          
        $mdToast.show(toast).then(function(res){
            // Do something on toast action
        });
    }

    facObj.showSuccessToaster = function(msg, status, state){
        facObj.showToaster(msg + ' Successfully', status, state);
    }

    return facObj;
}]);
	
	// app.factory('appUtilsDelay', ['$mdToast', '$state', function($mdToast, $state){

	// 	var facObj = {};

	// 	facObj.showToaster = function(msg, status, state){

	// 		var theme_style = (status == 1) ? 'success-toast' : ((status == 0) ? 'error-toast' : 'warning-toast');

	// 		var toast = $mdToast.
	// 		simple().
	// 		textContent(msg).
	// 		action('x').
	// 		highlightAction(true).
	// 		theme(theme_style).
	// 		hideDelay(60000).
	// 		position('bottom right');
	// 		$mdToast.show(toast).then(function(res){
	// 			if (state != null) {
	// 				$state.go(state);
	// 				if (res == 'ok') {
	// 					$state.go(state);
	// 				}
	// 			}
	// 		});
	// 	}

	// 	facObj.showSuccessToaster = function(msg, status, state){
	// 		facObj.showToaster(msg + ' Saved Successfully', status, state);
	// 	}

	// 	return facObj;
	// }])

	// app.factory('getArrayOfValuesFromObjArray', function() {

	// 	function removeNullValues(obj_array) {
	// 		if (obj_array) {
	// 			for (var i = 0, data_length = obj_array.length; i < data_length; i++) {
	// 				if (obj_array[i] == null || obj_array[i] == 'null' || obj_array[i] == undefined || typeof obj_array[i] == 'undefined') {
	// 					delete obj_array[i];
	// 				}
	// 			}
	// 			return obj_array;
	// 		}
	// 		else {
	// 			return [];
	// 		}
	// 	}

	// 	return function(array, value) {
	// 		var return_array = [];
	// 		for (var i = 0, data_length = array.length; i < data_length; i++) {
	// 			return_array.push(array[i][value]);
	// 		}
	// 		return removeNullValues(return_array);
	// 	}
	// })
	
	// app.factory('decode_customer', function(base64) {

	// 	return function(obj_array) {
	// 		for (var i = 0, data_length = obj_array.length; i < data_length; i++) {
	// 			obj_array[i].decoded_cus_name = base64.decode(obj_array[i].cus_name);
	// 		}
	// 		console.log(obj_array);
	// 		return obj_array;
	// 	}
	// })

	// app.factory('getSumOfValueFromObjectArray', function(){
	// 	return function(obj_array, key){
	// 		var sum = 0;
	// 		if (obj_array) {
	// 			for (var i = 0, data_length = obj_array.length; i < data_length; i++) {
	// 				sum += parseFloat(obj_array[i][key]);
	// 			}
	// 			return sum;
	// 		}else{
	// 			return 0;
	// 		}
	// 	}
	// });

	// app.factory('volume', function() {

	// 	return function(input, unit, action) {

	// 		var output;
	// 		if(unit === 'L'){

	// 			if(action === 'display'){
	// 				output = (input * 1000);
	// 			}else if(action === 'save'){
	// 				output = (input / 1000);
	// 			}
	// 		}else if(unit === 'gal'){
	// 			if(action === 'display'){
	// 				output = (input * 264.172);
	// 			}else if(action === 'save'){
	// 				output = (input / 264.172);
	// 			}
	// 		}else{
	// 			output = input;
	// 		}

	// 		return output;
	// 	}
	// });

	// app.factory('stringToDateObj', function(){
	// 	return function (input){
	// 		var arr = input.split("");
	// 		var output = new Date(parseInt(arr[0] + arr[1] + arr[2] + arr[3]), parseInt(arr[4] + arr[5]) - 1, parseInt(arr[6] + arr[7]));
	// 		return output;
	// 	};
	// });

})();
(function () {
    // body...
    'use strict';

    /**
    * module.campaign_tracker Module
    *
    * Description
    */
    angular.module('module.main').controller('viewProductController', viewProductController);

    function viewProductController($state, $scope, $mdDialog, $mdToast, $timeout, $rootScope, API_PATH, product_details, appUtils) {

        $scope.product = product_details;  
        $scope.message = "Product Added Successfully!"      
		
		console.log($scope.product)
		
		$scope.saveProduct = function() {
			
			
			
		}

		$scope.cancel = function() {
			$mdDialog.cancel();
		}

        $scope.AddCartItems = function(product) {
            var add_cart_data = {
                    "user_id" : $rootScope.logged_user.user_id,
                    "product_id": product.id,
                    "quantity" : 1
                }
                // var config = {
                //         withCredentials: true,
                //         headers : {
                //             'Content-Type': 'application/json',
                //             "Authorization" : atob($rootScope.logged_user.Token)
                //     }
                //     }
                // const notificationToast = document.querySelector('[success-data-toast]');
                // const toastCloseBtn = document.querySelector('[success-data-toast-close]');

                // // notification toast eventListener
                // toastCloseBtn.addEventListener('click', function () {
                // notificationToast.classList.add('closed');
                // });
                // $rootScope.cart_count = $rootScope.cart_count + 1;
                // $timeout(function() {
                //     $scope.cancel()
                // }, 5000);

                    $http.post(API_PATH + 'cartmanagement-user',add_cart_data, config)
                    .then(function onSuccess(response) {
                    	$scope.AddUserCartResponse = {
                    		"Data" : response.data,
                    		"status" : response.status,
                    		"headers" : response.header,
                    		"config" : response.config,
                    		"statusText" : response.statusText}
    
                    	console.log($scope.AddUserCartResponse)
                    $rootScope.cart_count = $rootScope.cart_count + 1;
                        const notificationToast = document.querySelector('[success-data-toast]');
                        const toastCloseBtn = document.querySelector('[success-data-toast-close]');

                        // notification toast eventListener
                        toastCloseBtn.addEventListener('click', function () {
                        notificationToast.classList.add('closed');
                        });
                        $rootScope.cart_count = $rootScope.cart_count + 1;
                        $timeout(function() {
                            $scope.cancel()
                        }, 5000);
                    })
                    .catch(function onError(response) {
                    	$scope.errorResponseDetails = {
                    		"Data" : response.data,
                    		"status" : response.status,
                    		"headers" : response.header,
                    		"config" : response.config,
                    		"statusText" : response.statusText}
                    	});
            
        };








    }

})();
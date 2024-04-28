
(function() {
	// body...
	'use strict';

	/**
	* module.main Module
	*
	* Description
	*/
	angular.module('module.main').controller('OrdersViewController' , OrdersViewController);

	function OrdersViewController($state, $scope, $http, $sessionStorage, $timeout, $cookies, $rootScope, API_PATH, $filter, $mdDialog, appUtils){
		$scope.records = [];
		$scope.count = 0;
		$scope.message = "Order Placed Successfully!" 
        $scope.toaster = false;
        $scope.getUserOrderResponse = {
            "Data" : {"data" : []}
        }
		$rootScope.cart_count = 0
		$scope.toaster = false
		// $scope.message = "Product Added Successfully!"
		
		$scope.logged_user = {};
		// $rootScope.logged_user = {email : "Srinitthi33.k@gmail.com", "password" : "Srinithi@93"}
		// console.log($rootScope.logged_user)

		if ($rootScope.logged_user.token == undefined) {
			$state.go("Login");
		}

		$scope.getCall = function(){

            var cart_data = {
				"user_id" : $rootScope.logged_user.user_id
			}
			var config = {
					withCredentials: true,
					headers : {
						'Content-Type': 'application/json',
						"Authorization" : atob($rootScope.logged_user.Token)
				}
				}
	
				$http.post(API_PATH + 'getuserorder-user',cart_data, config)
				.then(function onSuccess(response) {
					$scope.getUserOrderResponse = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
		
					console.log($scope.getUserOrderResponse)
				})
				.catch(function onError(response) {
					$scope.errorResponseDetails = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
					});
            // $scope.getUserOrderResponse.Data.data = [
            //     {
            //       "id": 1,
            //       "user_id": 101,
            //       "product_id": 201,
            //       "ordered_on": "2024-04-28T08:00:00Z",
            //       "delivered_on": "2024-05-05T08:00:00Z",
            //       "address_id": 301,
            //       "ordered_status": "packing"
            //     },
            //     {
            //       "id": 2,
            //       "user_id": 101,
            //       "product_id": 202,
            //       "ordered_on": "2024-04-27T08:00:00Z",
            //       "delivered_on": null,
            //       "address_id": 302,
            //       "ordered_status": "in_transit"
            //     },
            //     {
            //       "id": 3,
            //       "user_id": 101,
            //       "product_id": 203,
            //       "ordered_on": "2024-04-26T08:00:00Z",
            //       "delivered_on": null,
            //       "address_id": 303,
            //       "ordered_status": "packing"
            //     },
            //     {
            //       "id": 4,
            //       "user_id": 101,
            //       "product_id": 204,
            //       "ordered_on": "2024-04-25T08:00:00Z",
            //       "delivered_on": null,
            //       "address_id": 304,
            //       "ordered_status": "packing"
            //     },
            //     {
            //       "id": 5,
            //       "user_id": 101,
            //       "product_id": 205,
            //       "ordered_on": "2024-04-24T08:00:00Z",
            //       "delivered_on": null,
            //       "address_id": 305,
            //       "ordered_status": "packing"
            //     }
            //   ]
              

            
            $scope.records = $scope.getUserOrderResponse.Data.data;

			
		};


		$scope.getCall();

		

		
		
		
		
		






		









			
			


	}

})();
	

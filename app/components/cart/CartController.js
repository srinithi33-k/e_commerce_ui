
(function() {
	// body...
	'use strict';

	/**
	* module.main Module
	*
	* Description
	*/
	angular.module('module.main').controller('CartController' , CartController);

	function CartController($state, $scope, $http, $sessionStorage, $timeout, $cookies, $rootScope, API_PATH, $filter, $mdDialog, appUtils){
		$scope.records = [];
		$scope.count = 0;
		$scope.message = "Order Placed Successfully!" 
        $scope.toaster = false;
        $scope.getUserCartResponse = {
            "Data" : {"data" : []}
        }
		$rootScope.cart_count = 0
		$scope.toaster = false
		$scope.message = "Product Added Successfully!"
		
		// $scope.logged_user = {};
		// $rootScope.logged_user = {email : "Srinitthi33.k@gmail.com", "password" : "Srinithi@93"}
		// console.log($rootScope.logged_user)

		if ($rootScope.logged_user.token == undefined) {
			$state.go("Login");
		}


		$scope.available_product_urls = [
			"./assets/pair_products/Airpods.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_2_2.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_7_7.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_9.jpeg",
			"./assets/pair_products/pair_9_9.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_8_8.jpeg",
			"./assets/pair_products/pair_8.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_6.jpeg",
			"./assets/pair_products/pair_6_6.jpeg",
			"./assets/pair_products/pair_5.jpeg",
			"./assets/pair_products/pair_5_5.jpeg",
			"./assets/pair_products/pair_4.jpeg",
			"./assets/pair_products/pair_4_4.jpeg",
			"./assets/pair_products/pair_3.jpeg",
			"./assets/pair_products/pair_3_3.jpeg",
			"./assets/pair_products/pair_2.jpeg",
			"./assets/pair_products/pair_2_2.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_8_8.jpeg",
			"./assets/pair_products/pair_8.jpeg",
			"./assets/pair_products/pair_airpods.jpeg",
			"./assets/pair_products/pair_10.jpeg",
			"./assets/pair_products/pair_10_10.jpeg",
			"./assets/pair_products/pair_9.jpeg",
			"./assets/pair_products/pair_9_9.jpeg",
			"./assets/pair_products/pair_8.jpeg",
			"./assets/pair_products/pair_8_8.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1_1.jpeg",
			"./assets/pair_products/pair_7.jpeg",
			"./assets/pair_products/pair_7_7.jpeg",
			"./assets/pair_products/pair_6.jpeg",
			"./assets/pair_products/pair_6_6.jpeg",
			"./assets/pair_products/pair_5.jpeg",
			"./assets/pair_products/pair_5_5.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_1.jpeg",
			"./assets/pair_products/pair_4.jpeg",
			"./assets/pair_products/pair_3_3.jpeg",
			"./assets/pair_products/pair_3.jpeg",
			"./assets/pair_products/pair_2_2.jpeg",
			"./assets/pair_products/pair_2.jpeg"

		]

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
	
				$http.post(API_PATH + 'getusercart-user',cart_data, config)
				.then(function onSuccess(response) {
					$scope.getUserCartResponse = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
					$rootScope.cart_count = $scope.getUserCartResponse.Data.data.length
					console.log($scope.getUserCartResponse)
				})
				.catch(function onError(response) {
					$scope.errorResponseDetails = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
					});


            // $scope.getUserCartResponse.Data.data = [
            //         { "user_id": 12345, "product_id": 13000, "quantity": 1 , "product_details" : {
			// 			"id": 13000,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 405,
			// 			"product_name": "Acer Nitro",
			// 			"description": "Acer Nitro for Gaming",
			// 			"price": 900,
			// 			"skv_code": "SKV001",
			// 			"availability_count": 50,
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"percentage_discount": 5.5,
			// 			"special_offer_price": 800,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		}},
			// 		{ "user_id": 12345, "product_id": 13000, "quantity": 1 , "product_details" : {
			// 			"id": 13000,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 405,
			// 			"product_name": "Acer Nitro",
			// 			"description": "Acer Nitro for Gaming",
			// 			"price": 900,
			// 			"skv_code": "SKV001",
			// 			"availability_count": 50,
			// 			"product_url": "./assets/pair_products/pair_1_1.jpeg",
			// 			"percentage_discount": 5.5,
			// 			"special_offer_price": 800,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		}},
			// 		{ "user_id": 12345, "product_id": 13000, "quantity": 1 , "product_details" : {
			// 			"id": 13000,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 405,
			// 			"product_name": "Acer Nitro",
			// 			"description": "Acer Nitro for Gaming",
			// 			"price": 900,
			// 			"skv_code": "SKV001",
			// 			"availability_count": 50,
			// 			"product_url": "./assets/pair_products/pair_8.jpeg",
			// 			"percentage_discount": 5.5,
			// 			"special_offer_price": 800,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		}},
            //         { "user_id": 12345, "product_id": 13017, "quantity": 1 , "product_details" : {
			// 			"id": 13017,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8004,
			// 			"seller_id": 11003,
			// 			"product_variant_id": 411,
			// 			"product_name": "Jabra Elite 85t",
			// 			"description": "Advanced true wireless earbuds",
			// 			"price": 150,
			// 			"skv_code": "SKV302",
			// 			"availability_count": 60,
			// 			"percentage_discount": 9,
			// 			"special_offer_price": 130,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.15
			// 		}},
            //         { "user_id": 12345, "product_id": 13012, "quantity": 1 , "product_details" : {
			// 			"id": 13012,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11003,
			// 			"product_variant_id": 403,
			// 			"product_name": "Samsung Galaxy S22",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Flagship smartphone with incredible camera",
			// 			"price": 900,
			// 			"skv_code": "SKV104",
			// 			"availability_count": 40,
			// 			"percentage_discount": 6.5,
			// 			"special_offer_price": 800,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		}},
            //         { "user_id": 12345, "product_id": 13002, "quantity": 1, "product_details" : {
			// 			"id": 13002,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 10002,
			// 			"product_variant_id": 407,
			// 			"product_name": "Mac book",
			// 			"description": "Mac book 15",
			// 			"price": 1000,
			// 			"skv_code": "SKV003",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"availability_count": 60,
			// 			"percentage_discount": 7.5,
			// 			"special_offer_price": 950,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.4
			// 		}}
            // ]

            // Loop through each object in the array

            angular.forEach($scope.getUserCartResponse.Data.data, function(item) {

                var data = {
                    "product_id" : item.product_id
                }
    
                var config = {
                        withCredentials: true,
                        headers : {
                            'Content-Type': 'application/json',
                            "Authorization" : atob($rootScope.logged_user.Token)
                    }
                    }
            
                    $http.post(API_PATH + 'fetchproduct-user',data, config)
                    .then(function onSuccess(response) {                       
                        item.product_details = response.data.data;
						item.product_details.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length]
                    })
                    .catch(function onError(response) {
                        $scope.errorResponseDetails = {
                            "Data" : response.data,
                            "status" : response.status,
                            "headers" : response.header,
                            "config" : response.config,
                            "statusText" : response.statusText}
                        });
        
            });
            $scope.records = $scope.getUserCartResponse.Data.data;
			$rootScope.cart_count = $scope.records.length

			$scope.addresses = [
				{ area_name: '123 Main St', state_name: 'Anytown', country_name: 'CA' },
				{ area_name: '456 Elm St', state_name: 'Othertown', country_name: 'NY' },
				{ area_name: '789 Oak St', state_name: 'Sometown', country_name: 'TX' }
			];
		
			$scope.selectAddress = function(selectedAddress) {
				$scope.selectedAddress = selectedAddress;
			};
		};


		$scope.getCall();

		$scope.addressChanged = function() {
			console.log('Address changed to:', $scope.selectedAddress);
			// You can perform further actions when the address changes here
		};

		$scope.AddAddress = function() {
	
			$mdDialog.show({
				controller : 'AddressController',
				templateUrl : 'app/components/address/add_new_address.tmpl.html',
				parent: angular.element(document.body),
				// targetEvent: event,
				clickOutsideToClose:false,
				escapeToClose: false
			}).then(function(status) {
				$scope.getCall();
			}, function(cancel) {
				$scope.getCall();
			});
	
		}
		
		$scope.removeItem = function(product_id, index) {
			console.log($scope.records)
			$scope.records.splice(index, 1)
			console.log($scope.records)
			appUtils.showToaster("Product removed Successful", 1)
			console.log($scope.records)
			var cart_data = {
				 	"product_id" : product_id,
					"user_id" : $rootScope.logged_user.user_id
				}
				var config = {
						withCredentials: true,
						headers : {
							'Content-Type': 'application/json',
							"Authorization" : atob($rootScope.logged_user.Token)
					}
					}
		
					$http.post(API_PATH + 'delete-user-cart',cart_data, config)
					.then(function onSuccess(response) {
						$scope.deleteUserCartResponse = {
							"Data" : response.data,
							"status" : response.status,
							"headers" : response.header,
							"config" : response.config,
							"statusText" : response.statusText}
						console.log($scope.deleteUserCartResponse)
					})
					.catch(function onError(response) {
						$scope.errorResponseDetails = {
							"Data" : response.data,
							"status" : response.status,
							"headers" : response.header,
							"config" : response.config,
							"statusText" : response.statusText}
						});
			$scope.getCall();
		}
		
		// $scope.toast_function = function() {
		// 	$scope.toaster = true;
		// 	function attachEventListener() {
		// 		const notificationToast_1 = document.querySelector('[success-data-toast]');
		// 		const toastCloseBtn_1 = document.querySelector('[success-data-toast-close]');

		// 		// notification toast eventListener

		// 		if (notificationToast_1 && toastCloseBtn_1 && $scope.toaster) {
		// 			// Attach event listener to close button
		// 			toastCloseBtn_1.addEventListener('click', function () {
		// 				notificationToast_1.classList.add('closed');
		// 			});
		// 		}
		// 	}
		// 	$timeout(attachEventListener, 100);
			
		// }
		// $scope.toast_function_off = function() {
		// 	$scope.toaster = false;
		// 	console.log("toaster off", $scope.toaster);
		// }






		$scope.toast_function = function() {
			$scope.toaster = true;
			function attachEventListener() {
				const notificationToast_1 = document.querySelector('[success-data-toast]');
				const toastCloseBtn_1 = document.querySelector('[success-data-toast-close]');

				// notification toast eventListener

				if (notificationToast_1 && toastCloseBtn_1 && $scope.toaster) {
					// Attach event listener to close button
					toastCloseBtn_1.addEventListener('click', function () {
						notificationToast_1.classList.add('closed');
					});
				}
			}
			$timeout(attachEventListener, 100);
			// toastCloseBtn_1.addEventListener('click', function () {
			// 	notificationToast_1.classList.add('closed');
			// 	});
		}
		$scope.toast_function_off = function() {
			$scope.toaster = false;
			console.log("toaster off", $scope.toaster);
		}









			// Loop through each object in the array
			$scope.placeItem = function() {

				angular.forEach($scope.getUserCartResponse.Data.data, function(item) {

					var data = {
						"product_id" : item.product_id,
						"user_id" : item.user_id,
						"address_id" : $scope.selectedAddress.id
					}
					// $scope.count = 5;
		
					var config = {
							withCredentials: true,
							headers : {
								'Content-Type': 'application/json',
								"Authorization" : atob($rootScope.logged_user.Token)
						}
						}
				
						$http.post(API_PATH + 'orderconfirmation-user',data, config)
						.then(function onSuccess(response) {                       
							item.product_details = response.data.data
							$scope.count = $scope.count + 1;
						})
						.catch(function onError(response) {
							$scope.errorResponseDetails = {
								"Data" : response.data,
								"status" : response.status,
								"headers" : response.header,
								"config" : response.config,
								"statusText" : response.statusText}
							});
			
				});
				if ($scope.count != 0) {
					$scope.toast_function();
					$timeout(function() {
						$state.go('Myorder')
					}, 7000);
				}

			};


	}

})();
	

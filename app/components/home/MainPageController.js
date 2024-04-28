// (function() {
// 	var app = angular.module('module.main')
// 	app.factory('authInterceptor', ['$cookies','$rootScope', function($cookies, $rootScope) {
// 		var interceptor = {
// 		request: function(config) {
// 			// Read the cookies set by Django API
			
// 			return config;
// 		}
// 		};
// 		return interceptor;
// 	}]);
	
// 	app.config(['$httpProvider', function($httpProvider) {
// 		$httpProvider.interceptors.push('authInterceptor');
// 	}]);

// })();


(function() {
	// body...
	'use strict';

	/**
	* module.main Module
	*
	* Description
	*/
	angular.module('module.main').controller('homeCtrl' , homeCtrl);

	function homeCtrl($state, $scope, $http, $sessionStorage, $timeout, $cookies, $rootScope, API_PATH, $filter, $mdDialog, appUtils){
		$scope.records = [];
		$rootScope.cart_count = 0
		$scope.toaster = false
		$scope.message = "Product Added Successfully!"
		$scope.records_1_1 = [];
		$scope.records_1_2 = [];
		$scope.records_2_1 = [];
		$scope.records_2_2 = [];
		$scope.records_3_1 = [];
		$scope.records_3_2 = [];
		$scope.logged_user = {};
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
		// $rootScope.logged_user = {email : "Srinitthi33.k@gmail.com", "password" : "Srinithi@93"}
		// console.log($rootScope.logged_user)


		if ($rootScope.logged_user.token == undefined) {
			$state.go("Login");
		}

		$scope.openCart = function() {
			$state.go("Cart");
		}

		$scope.openMyorders = function() {
			$state.go("Myorder");
		}



		$scope.splitRecords = function() {
			// Initialize the six lists
		
			// Split the records into six lists
			angular.forEach($scope.records, function(record, index) {
				if (index < Math.ceil($scope.records.length / 6)) {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_1_1.push(record);
				} else if (index < Math.ceil($scope.records.length / 3)) {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_1_2.push(record);
				} else if (index < Math.ceil($scope.records.length / 2)) {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_2_1.push(record);
				} else if (index < Math.ceil($scope.records.length / 1.5)) {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_2_2.push(record);
				} else if (index < Math.ceil($scope.records.length / 1.2)) {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_3_1.push(record);
				} else {
					record.product_url = $scope.available_product_urls[index % $scope.available_product_urls.length];
					$scope.records_3_2.push(record);
				}
			});
		};

		$scope.getCall = function(){
				
			
			// var csrfToken = angular.element(document.querySelector('input[name="_token"]')).val();
			var data = {
			}
			
			
			var config = {
					withCredentials: true,
					headers : {
						'Content-Type': 'application/json',
						"Authorization" : $rootScope.logged_user.token
				}
				}
		
				$http.post(API_PATH + 'getproduct-user',data, config)
				.then(function onSuccess(response) {
					$scope.GetProductApiResponse = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
					
					console.log($scope.GetProductApiResponse)
				})
				.catch(function onError(response) {
					$scope.errorResponseDetails = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}
					});

			// $scope.GetProductApiResponse = {
			// 	"data" : [
			// 		{
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
			// 		},
			// 		{
			// 			"id": 13001,
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 10001,
			// 			"product_variant_id": 406,
			// 			"product_name": "Asus Tuf",
			// 			"description": "Gaming world Ruler Asus",
			// 			"price": 950,
			// 			"skv_code": "SKV002",
			// 			"availability_count": 40,
			// 			"percentage_discount": 6,
			// 			"special_offer_price": 850,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.3
			// 		},
			// 		{
			// 			"id": 13002,
			// 			"category_name": "Laptop",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 10002,
			// 			"product_variant_id": 407,
			// 			"product_name": "Mac book",
			// 			"description": "Mac book 15",
			// 			"price": 1000,
			// 			"skv_code": "SKV003",
			// 			"availability_count": 60,
			// 			"percentage_discount": 7.5,
			// 			"special_offer_price": 950,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.4
			// 		},
			// 		{
			// 			"id": 13003,
			// 			"category_name": "Mobiles",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 400,
			// 			"product_name": "Redmi 14 ultra",
			// 			"description": "Best Amoled display ever with Snapdragon 8 gen 3",
			// 			"price": 500,
			// 			"skv_code": "SKV101",
			// 			"availability_count": 30,
			// 			"percentage_discount": 3,
			// 			"special_offer_price": 480,
			// 			"special_offer_minimum_quantity": 5,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13004,
			// 			"category_name": "Mobiles",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11001,
			// 			"product_variant_id": 401,
			// 			"product_name": "Oneplus 12R",
			// 			"description": "Oneplus Flagship killer",
			// 			"price": 550,
			// 			"skv_code": "SKV102",
			// 			"availability_count": 35,
			// 			"percentage_discount": 3.5,
			// 			"special_offer_price": 530,
			// 			"special_offer_minimum_quantity": 8,
			// 			"special_offer_discount_factor": 0.15
			// 		},
			// 		{
			// 			"id": 13005,
			// 			"category_name": "Mobiles",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11002,
			// 			"product_variant_id": 402,
			// 			"product_name": "Oppo A53",
			// 			"description": "Best Camera Ever",
			// 			"price": 600,
			// 			"skv_code": "SKV103",
			// 			"availability_count": 40,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 580,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13006,
			// 			"category_name": "Earbuds",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8003,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 421,
			// 			"product_name": "Sandisk Pendrive",
			// 			"description": "Description for Pendrive 1",
			// 			"price": 20,
			// 			"skv_code": "SKV201",
			// 			"availability_count": 100,
			// 			"percentage_discount": 2,
			// 			"special_offer_price": 18,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13007,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8004,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 410,
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"product_name": "Realme Airbuds",
			// 			"description": "Active TWS",
			// 			"price": 80,
			// 			"skv_code": "SKV301",
			// 			"availability_count": 50,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 75,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13008,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 417,
			// 			"product_name": "CP Plus 4g router",
			// 			"description": "upto 100Mbps",
			// 			"price": 40,
			// 			"skv_code": "SKV401",
			// 			"availability_count": 80,
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"percentage_discount": 2.5,
			// 			"special_offer_price": 38,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13000,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 405,
			// 			"product_name": "Acer Nitro",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"description": "Acer Nitro for Gaming",
			// 			"price": 900,
			// 			"skv_code": "SKV001",
			// 			"availability_count": 50,
			// 			"percentage_discount": 5.5,
			// 			"special_offer_price": 800,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13001,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 10001,
			// 			"product_variant_id": 406,
			// 			"product_name": "Asus Tuf",
			// 			"product_url": "./assets/pair_products/pair_1.jpeg",
			// 			"description": "Gaming world Ruler Asus",
			// 			"price": 950,
			// 			"skv_code": "SKV002",
			// 			"availability_count": 40,
			// 			"percentage_discount": 6,
			// 			"special_offer_price": 850,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.3
			// 		},
			// 		{
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
			// 		},
			// 		{
			// 			"id": 13003,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 400,
			// 			"product_name": "Redmi 14 ultra",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Best Amoled display ever with Snapdragon 8 gen 3",
			// 			"price": 500,
			// 			"skv_code": "SKV101",
			// 			"availability_count": 30,
			// 			"percentage_discount": 3,
			// 			"special_offer_price": 480,
			// 			"special_offer_minimum_quantity": 5,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13004,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11001,
			// 			"product_variant_id": 401,
			// 			"product_name": "Oneplus 12R",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Oneplus Flagship killer",
			// 			"price": 550,
			// 			"skv_code": "SKV102",
			// 			"availability_count": 35,
			// 			"percentage_discount": 3.5,
			// 			"special_offer_price": 530,
			// 			"special_offer_minimum_quantity": 8,
			// 			"special_offer_discount_factor": 0.15
			// 		},
			// 		{
			// 			"id": 13005,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11002,
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"product_variant_id": 402,
			// 			"product_name": "Oppo A53",
			// 			"description": "Best Camera Ever",
			// 			"price": 600,
			// 			"skv_code": "SKV103",
			// 			"availability_count": 40,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 580,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13006,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8003,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 421,
			// 			"product_name": "Sandisk Pendrive",
			// 			"description": "Description for Pendrive 1",
			// 			"price": 20,
			// 			"skv_code": "SKV201",
			// 			"availability_count": 100,
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"percentage_discount": 2,
			// 			"special_offer_price": 18,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13007,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8004,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 410,
			// 			"product_name": "Realme Airbuds",
			// 			"description": "Active TWS",
			// 			"price": 80,
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"skv_code": "SKV301",
			// 			"availability_count": 50,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 75,
			// 			"special_offer_minimum_quantity": 10,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13008,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11000,
			// 			"product_variant_id": 417,
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"product_name": "CP Plus 4g router",
			// 			"description": "upto 100Mbps",
			// 			"price": 40,
			// 			"skv_code": "SKV401",
			// 			"availability_count": 80,
			// 			"percentage_discount": 2.5,
			// 			"special_offer_price": 38,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13009,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11003,
			// 			"product_variant_id": 408,
			// 			"product_name": "Lenovo Legion",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Power-packed gaming laptop",
			// 			"price": 1100,
			// 			"skv_code": "SKV004",
			// 			"availability_count": 55,
			// 			"percentage_discount": 8,
			// 			"special_offer_price": 1000,
			// 			"special_offer_minimum_quantity": 12,
			// 			"special_offer_discount_factor": 0.25
			// 		},
			// 		{
			// 			"id": 13010,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"seller_id": 11004,
			// 			"product_variant_id": 409,
			// 			"product_name": "HP Pavilion",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Sleek design, powerful performance",
			// 			"price": 950,
			// 			"skv_code": "SKV005",
			// 			"availability_count": 45,
			// 			"percentage_discount": 7,
			// 			"special_offer_price": 850,
			// 			"special_offer_minimum_quantity": 18,
			// 			"special_offer_discount_factor": 0.3
			// 		},
			// 		{
			// 			"id": 13011,
			// 			"category_name": "Laptop",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8001,
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"seller_id": 11005,
			// 			"product_variant_id": 410,
			// 			"product_name": "Dell XPS",
			// 			"description": "Unmatched performance, stunning display",
			// 			"price": 1200,
			// 			"skv_code": "SKV006",
			// 			"availability_count": 65,
			// 			"percentage_discount": 9,
			// 			"special_offer_price": 1100,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.35
			// 		},
			// 		{
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
			// 		},
			// 		{
			// 			"id": 13013,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11004,
			// 			"product_variant_id": 404,
			// 			"product_name": "Google Pixel 7",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Pure Android experience with top-notch camera",
			// 			"price": 1000,
			// 			"skv_code": "SKV105",
			// 			"availability_count": 35,
			// 			"percentage_discount": 7,
			// 			"special_offer_price": 900,
			// 			"special_offer_minimum_quantity": 12,
			// 			"special_offer_discount_factor": 0.25
			// 		},
			// 		{
			// 			"id": 13014,
			// 			"category_name": "Mobiles",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8000,
			// 			"seller_id": 11005,
			// 			"product_variant_id": 405,
			// 			"product_name": "iPhone 14",
			// 			"product_url": "./assets/pair_products/pair_2_2.jpeg",
			// 			"description": "Next-gen iPhone with revolutionary features",
			// 			"price": 1200,
			// 			"skv_code": "SKV106",
			// 			"availability_count": 50,
			// 			"percentage_discount": 8.5,
			// 			"special_offer_price": 1100,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.3
			// 		},
			// 		{
			// 			"id": 13015,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8003,
			// 			"seller_id": 11001,
			// 			"product_variant_id": 422,
			// 			"product_name": "Sony WF-1000XM5",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"description": "Industry-leading noise-canceling earbuds",
			// 			"price": 200,
			// 			"skv_code": "SKV202",
			// 			"availability_count": 80,
			// 			"percentage_discount": 10,
			// 			"special_offer_price": 180,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13016,
			// 			"category_name": "Earbuds",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8003,
			// 			"seller_id": 11002,
			// 			"product_variant_id": 423,
			// 			"product_name": "Bose QuietComfort Earbuds",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"description": "Premium earbuds with exceptional sound quality",
			// 			"price": 250,
			// 			"skv_code": "SKV203",
			// 			"availability_count": 70,
			// 			"percentage_discount": 12,
			// 			"special_offer_price": 230,
			// 			"special_offer_minimum_quantity": 18,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
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
			// 		},
			// 		{
			// 			"id": 13018,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11006,
			// 			"product_variant_id": 418,
			// 			"product_name": "WD Elements Portable External Hard Drive",
			// 			"description": "High-capacity storage solution",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"price": 100,
			// 			"skv_code": "SKV402",
			// 			"availability_count": 90,
			// 			"percentage_discount": 5,
			// 			"special_offer_price": 90,
			// 			"special_offer_minimum_quantity": 25,
			// 			"special_offer_discount_factor": 0.05
			// 		},
			// 		{
			// 			"id": 13019,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11007,
			// 			"product_variant_id": 419,
			// 			"product_name": "Logitech MX Master 3 Wireless Mouse",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"description": "Premium ergonomic mouse for professionals",
			// 			"price": 80,
			// 			"skv_code": "SKV403",
			// 			"availability_count": 70,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 75,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13020,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11008,
			// 			"product_variant_id": 420,
			// 			"product_name": "TP-Link Archer AX6000 WiFi 6 Router",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"description": "Ultra-fast Wi-Fi router for home and office",
			// 			"price": 200,
			// 			"skv_code": "SKV404",
			// 			"availability_count": 40,
			// 			"percentage_discount": 10,
			// 			"special_offer_price": 180,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.15
			// 		},
			// 		{
			// 			"id": 13021,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11009,
			// 			"product_variant_id": 421,
			// 			"product_name": "Samsung 970 EVO Plus SSD",
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"description": "High-performance NVMe solid state drive",
			// 			"price": 150,
			// 			"skv_code": "SKV405",
			// 			"availability_count": 55,
			// 			"percentage_discount": 8,
			// 			"special_offer_price": 135,
			// 			"special_offer_minimum_quantity": 12,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13022,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11010,
			// 			"product_variant_id": 422,
			// 			"product_name": "Logitech G Pro X Mechanical Gaming Keyboard",
			// 			"description": "Professional-grade mechanical keyboard",
			// 			"price": 120,
			// 			"skv_code": "SKV406",
			// 			"availability_count": 65,
			// 			"percentage_discount": 5.5,
			// 			"special_offer_price": 110,
			// 			"special_offer_minimum_quantity": 18,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13023,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"seller_id": 11011,
			// 			"product_variant_id": 423,
			// 			"product_name": "Razer DeathAdder Elite Gaming Mouse",
			// 			"description": "Highly precise gaming mouse with customizable RGB lighting",
			// 			"price": 70,
			// 			"skv_code": "SKV407",
			// 			"availability_count": 80,
			// 			"percentage_discount": 7,
			// 			"special_offer_price": 65,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.15
			// 		},
			// 		{
			// 			"id": 13024,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11012,
			// 			"product_variant_id": 424,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"product_name": "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
			// 			"description": "Premium wireless headphones with industry-leading noise cancellation",
			// 			"price": 300,
			// 			"skv_code": "SKV408",
			// 			"availability_count": 40,
			// 			"percentage_discount": 12,
			// 			"special_offer_price": 270,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13025,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11013,
			// 			"product_variant_id": 425,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"product_name": "Bose SoundLink Color Bluetooth Speaker II",
			// 			"description": "Portable Bluetooth speaker with immersive sound",
			// 			"price": 100,
			// 			"skv_code": "SKV409",
			// 			"availability_count": 50,
			// 			"percentage_discount": 6,
			// 			"special_offer_price": 90,
			// 			"special_offer_minimum_quantity": 12,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13026,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11014,
			// 			"product_variant_id": 426,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"product_name": "Anker PowerCore 10000 Portable Charger",
			// 			"description": "Compact and high-speed portable charger",
			// 			"price": 50,
			// 			"skv_code": "SKV410",
			// 			"availability_count": 60,
			// 			"percentage_discount": 4,
			// 			"special_offer_price": 45,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.1
			// 		},
			// 		{
			// 			"id": 13027,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11015,
			// 			"product_variant_id": 427,
			// 			"product_name": "Amazon Echo Dot (4th Gen)",
			// 			"description": "Smart speaker with Alexa",
			// 			"price": 30,
			// 			"skv_code": "SKV411",
			// 			"availability_count": 70,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"percentage_discount": 5,
			// 			"special_offer_price": 25,
			// 			"special_offer_minimum_quantity": 20,
			// 			"special_offer_discount_factor": 0.2
			// 		},
			// 		{
			// 			"id": 13028,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11016,
			// 			"product_variant_id": 428,
			// 			"product_name": "Fitbit Versa 3 Smartwatch",
			// 			"description": "Health and fitness tracker with built-in GPS",
			// 			"price": 150,
			// 			"skv_code": "SKV412",
			// 			"availability_count": 80,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"percentage_discount": 8,
			// 			"special_offer_price": 135,
			// 			"special_offer_minimum_quantity": 18,
			// 			"special_offer_discount_factor": 0.15
			// 		},
			// 		{
			// 			"id": 13029,
			// 			"category_name": "Other",
			// 			"price_decision_factor_id": 9000,
			// 			"sub_category_product_id": 8002,
			// 			"seller_id": 11017,
			// 			"product_variant_id": 429,
			// 			"product_url": "./assets/pair_products/pair_3_3.jpeg",
			// 			"product_name": "Canon EOS Rebel T7 DSLR Camera",
			// 			"description": "Entry-level DSLR camera with high-quality image capture",
			// 			"price": 400,
			// 			"skv_code": "SKV413",
			// 			"availability_count": 60,
			// 			"percentage_discount": 10,
			// 			"special_offer_price": 360,
			// 			"special_offer_minimum_quantity": 15,
			// 			"special_offer_discount_factor": 0.1
			// 		}
			// 	]
				
			// }
			$scope.records = $scope.GetProductApiResponse.Data.data
			$scope.splitRecords();
			console.log($scope.records_1_1)
			console.log($scope.records_1_2)
			console.log($scope.records_2_1)
			console.log($scope.records_2_2)
			console.log($scope.records_3_1)
			console.log($scope.records_3_2)


			var cart_data = {
				"user_id" : $rootScope.logged_user.user_id
			}
			var config = {
					withCredentials: true,
					headers : {
						'Content-Type': 'application/json',
						"Authorization" : $rootScope.logged_user.token
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
			
		};


		$scope.getCall();
		
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

	   $scope.ViewProduct = function(product_details) {
		console.log(product_details);

		$mdDialog.show({
			controller : 'viewProductController',
			templateUrl : 'app/components/view_product/view_product.tmpl.html',
			parent: angular.element(document.body),
			// targetEvent: event,
			clickOutsideToClose:false,
			escapeToClose: false,
			locals : {
				product_details : product_details
			}
		}).then(function(status) {
		}, function(cancel) {
		});

	}

	$scope.AddCartItems = function(product) {
		var add_cart_data = {
				"user_id" : $rootScope.logged_user.user_id,
				"product_id": product.id,
				"quantity" : 1
			}
			var config = {
					withCredentials: true,
					headers : {
						'Content-Type': 'application/json',
						"Authorization" : $rootScope.logged_user.token
				}
				}


			// notification toast variables
			

			
			// $rootScope.cart_count = $rootScope.cart_count + 1;
			// $scope.toast_function();
				$http.post(API_PATH + 'cartmanagement-user',add_cart_data, config)
				.then(function onSuccess(response) {
					$scope.AddUserCartResponse = {
						"Data" : response.data,
						"status" : response.status,
						"headers" : response.header,
						"config" : response.config,
						"statusText" : response.statusText}

					console.log($scope.AddUserCartResponse)
				$mdDialog.show({
						controller : 'viewProductController',
						templateUrl : 'app/components/view_product/view_product.tmpl.html',
						parent: angular.element(document.body),
						// targetEvent: event,
						clickOutsideToClose:false,
						escapeToClose: false,
						locals : {
							product_details : product_details
						}
					}).then(function(status) {
					}, function(cancel) {
					});
				$rootScope.cart_count = $rootScope.cart_count + 1;
				$scope.toast_function();
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



		// modal variables
		const modal = document.querySelector('[data-modal]');
		const modalCloseBtn = document.querySelector('[data-modal-close]');
		const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

		// modal function
		const modalCloseFunc = function () { modal.classList.add('closed') }

		// modal eventListener
		modalCloseOverlay.addEventListener('click', modalCloseFunc);
		modalCloseBtn.addEventListener('click', modalCloseFunc);





		// notification toast variables
		const notificationToast = document.querySelector('[data-toast]');
		const toastCloseBtn = document.querySelector('[data-toast-close]');

		// notification toast eventListener
		toastCloseBtn.addEventListener('click', function () {
		notificationToast.classList.add('closed');
		});

		

		// notification toast eventListener
		toastCloseBtn.addEventListener('click', function () {
		notificationToast.classList.add('closed');
		});





		// mobile menu variables
		const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
		const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
		const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
		const overlay = document.querySelector('[data-overlay]');

		for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

		// mobile menu function
		const mobileMenuCloseFunc = function () {
			mobileMenu[i].classList.remove('active');
			overlay.classList.remove('active');
		}

		mobileMenuOpenBtn[i].addEventListener('click', function () {
			mobileMenu[i].classList.add('active');
			overlay.classList.add('active');
		});

		mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
		overlay.addEventListener('click', mobileMenuCloseFunc);

		}





		// accordion variables
		const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
		const accordion = document.querySelectorAll('[data-accordion]');

		for (let i = 0; i < accordionBtn.length; i++) {

		accordionBtn[i].addEventListener('click', function () {

			const clickedBtn = this.nextElementSibling.classList.contains('active');

			for (let i = 0; i < accordion.length; i++) {

			if (clickedBtn) break;

			if (accordion[i].classList.contains('active')) {

				accordion[i].classList.remove('active');
				accordionBtn[i].classList.remove('active');

			}

			}

			this.nextElementSibling.classList.toggle('active');
			this.classList.toggle('active');

		});

		}





	}

})();
	
	

	

// }]);

// my temp last line update check!............******,,,,,,,,
(function() {
	// body...
	'use strict';

	/**
	* module.main Module
	*
	* Description
	*/
	angular.module('module.main').controller('CreateUserController' , CreateUserController);


	function CreateUserController($state, $scope, $cookies, $sessionStorage, $http, $rootScope, API_PATH, appUtils){
		
		$scope.records={};      
        $scope.user_request = {};
        console.log("create user controller");
        // $rootScope.logged_user = {};

		// $scope.countries = [
		// 	            { id: 1, country_name: 'United States' },
		// 	            { id: 2, country_name: 'United Kingdom' },
		// 	            { id: 3, country_name: 'Canada' },
		// 	            { id: 4, country_name: 'India' }, // Added India
		// 	            // Add more countries as needed
		// 	        ];
		
		
			//$scope.fetchCompany();

			$scope.fetchCountry = function() {
				var country_data = {
				}
				var config = {
						withCredentials: true,
						headers : {
							'Content-Type': 'application/json'
					}
					}
	
					$http.post(API_PATH + 'get-country', country_data, config)
					.then(function onSuccess(response) {
						$scope.GetCountryResponse = {
							"Data" : response.data,
							"status" : response.status,
							"headers" : response.header,
							"config" : response.config,
							"statusText" : response.statusText}
	
						console.log($scope.GetCountryResponse)
						$scope.countries = $scope.GetCountryResponse.Data.data
						
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
	
			$scope.fetchCountry();
		

		$scope.LoginUser = function() {
			$state.go('Login');
		};





		$scope.RegisterUser = function(){
			            // $rootScope.logged_user.email = $scope.user_request.username
			            // $rootScope.logged_user.password = $scope.user_request.password
			
			            // $state.go('home')
						
						
			            var data = {
			                email : $scope.user_request.username,
			                password : $scope.user_request.password,
			                country_id : $scope.country_id
			            }
			
			            var config = {
			                withCredentials: true,
			                headers : {
			                    'Content-Type': 'application/json'
			            }
			            }
			
			            console.log($scope.user_request.username)
			            console.log($scope.user_request.password)
			
			            appUtils.showToaster("Registration Successful", 1)
						$scope.RegisterForm.$setUntouched();
			            $state.go('Login');
			
			            if ($scope.user_request.username != undefined || $scope.user_request.password != undefined)
			                $http.post(API_PATH + 'register-user', data, config)
			                .then(function onSuccess(response) {
			                    $scope.successDataResponse = {
			                        "Data" : response.data,
			                        "status" : response.status,
			                        "headers" : response.headers,
			                        "config" : response.config,
			                        "statusText" : response.statusText}
			                    $rootScope.logged_user = $scope.successDataResponse.Data
			                    $rootScope.isAuthenticated = "true"
			                    console.log($scope.successDataResponse)
			                    appUtils.showSuccessToaster("Registration Successful", 1)
								
			                    // $sessionStorage.sessionid = atob($scope.successDataResponse.Data.session);
			                    // $cookies.put('session_id', atob($scope.successDataResponse.Data.session), { expiration: 1440, expirationUnit: 'minutes' })  // { expiration: 1440, expirationUnit: 'minutes' }
							   
			                    $state.go('Login')
			                })
			                .catch(function onError(response) {
			                    $scope.errorResponseDetails = {
			                        "Data" : response.data,
			                        "status" : response.status,
			                        "headers" : response.header,
			                        "config" : response.config,
			                        "statusText" : response.statusText}
			                    console.log($scope.errorResponseDetails)
			                    // console.log(response.statusText)
			                });
					
					};
						
        
	}

})();
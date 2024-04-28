(function() {
	// body...
	'use strict';

	/**
	* module.main Module
	*
	* Description
	*/
	angular.module('module.main').controller('LoginPageController' , LoginPageController);


	function LoginPageController($state, $scope, $window, $cookies, $location, $sessionStorage, $http, $rootScope, API_PATH, appUtils){
		
		$scope.records={};      
        $scope.user_request = {}
        // $rootScope.logged_user = {}

        $scope.register = function() {

           $state.go('create')
        }
        
		
		$scope.authLogin = function(){
            $rootScope.logged_user = {}
            $rootScope.logged_user.email = $scope.user_request.username
            $rootScope.logged_user.password = $scope.user_request.password
            // appUtils.showToaster("Login Successful", 1)
            // $state.go('home')
			
			
            var data = {
                email : $scope.user_request.username,
                password : $scope.user_request.password
            }

            var config = {
                withCredentials: true,
                headers : {
                    'Content-Type': 'application/json'
            }
            }

            console.log($scope.user_request.username)
            console.log($scope.user_request.password)

            if ($scope.user_request.username != undefined || $scope.user_request.password != undefined)
                $http.post(API_PATH + 'auth-login', data, config)
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
                    appUtils.showToaster("Login Successful", 1)
                    
                    // $sessionStorage.sessionid = atob($scope.successDataResponse.Data.session);
                    // $cookies.put('session_id', atob($scope.successDataResponse.Data.session), { expiration: 1440, expirationUnit: 'minutes' })  // { expiration: 1440, expirationUnit: 'minutes' }
                   
                    $state.go('home')
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
        
		}

        
        
		
		// authLogin();
	}

})();
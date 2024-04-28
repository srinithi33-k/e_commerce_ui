(function () {
    // body...
    'use strict';

    /**
    * module.campaign_tracker Module
    *
    * Description
    */
    angular.module('module.main').controller('AddressController', AddressController);

    function AddressController($scope, $mdDialog, $timeout, $mdToast, $rootScope, API_PATH, appUtils) {


        $scope.cancel = function() {
			$mdDialog.cancel();
		}
       
        $scope.message = "Address Added Successfully!" 
        $scope.toaster = false;


        // $scope.countries = [
        //     { id: 1, country_name: 'United States' },
        //     { id: 2, country_name: 'United Kingdom' },
        //     { id: 3, country_name: 'Canada' },
        //     { id: 4, country_name: 'India' }, // Added India
        //     // Add more countries as needed
        // ];
        
        // $scope.states = [
        //     { id: 1, state_name: 'California' },
        //     { id: 2, state_name: 'Texas' },
        //     { id: 3, state_name: 'New York' },
        //     { id: 4, state_name: 'Maharashtra' }, // Added Maharashtra for India
        //     { id: 5, state_name: 'Tamil Nadu' }, // Added Tamil Nadu for India
        //     { id: 6, state_name: 'Karnataka' }, // Added Karnataka for India
        //     // Add more states as needed
        // ];
        
        // $scope.areas = [
        //     { id: 1, area_name: 'Los Angeles' },
        //     { id: 2, area_name: 'San Francisco' },
        //     { id: 3, area_name: 'San Diego' },
        //     { id: 4, area_name: 'Mumbai' }, // Added Mumbai for Maharashtra, India
        //     { id: 5, area_name: 'Pune' }, // Added Pune for Maharashtra, India
        //     { id: 6, area_name: 'Chennai' }, // Added Chennai for Tamil Nadu, India
        //     { id: 7, area_name: 'Bangalore' }, // Added Bangalore for Karnataka, India
        //     // Add more areas as needed
        // ];


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


        $scope.addAddress = function() {
            var add_cart_data = {
                "country_id" : $scope.country_id,
                "state_id": $scope.state_id,
                "area_id" : $scope.area_id
            }
            var config = {
                    withCredentials: true,
                    headers : {
                        'Content-Type': 'application/json'
                }
                }
                $scope.toast_function();
                $timeout(function() {
                    $scope.cancel()
                }, 5000);


                



                $http.post(API_PATH + 'newaddress-user',add_cart_data, config)
                .then(function onSuccess(response) {
                	$scope.AddUserAddressResponse = {
                		"Data" : response.data,
                		"status" : response.status,
                		"headers" : response.header,
                		"config" : response.config,
                		"statusText" : response.statusText}

                	console.log($scope.AddUserAddressResponse) 
    
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

        $scope.fetchState = function() {
            var state_data = {
                "country_id" : $scope.country_id
            }
            var config = {
                    withCredentials: true,
                    headers : {
                        'Content-Type': 'application/json'
                }
                }

                $http.post(API_PATH + 'get-state',state_data, config)
                .then(function onSuccess(response) {
                	$scope.GetStateResponse = {
                		"Data" : response.data,
                		"status" : response.status,
                		"headers" : response.header,
                		"config" : response.config,
                		"statusText" : response.statusText}

                	console.log($scope.GetStateResponse)
                    $scope.states = $scope.GetStateResponse.Data.data
                    
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


        $scope.fetchArea = function() {
            var area_data = {
                "country_id" : $scope.country_id,
                "state_id" : $scope.state_id
            }
            var config = {
                    withCredentials: true,
                    headers : {
                        'Content-Type': 'application/json'
                }
                }

                $http.post(API_PATH + 'get-area',area_data, config)
                .then(function onSuccess(response) {
                	$scope.GetAreaResponse = {
                		"Data" : response.data,
                		"status" : response.status,
                		"headers" : response.header,
                		"config" : response.config,
                		"statusText" : response.statusText}

                	console.log($scope.GetAreaResponse)
                    $scope.areas = $scope.GetAreaResponse.Data.data
                    
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








             
		
		// const notificationToast = document.querySelector('[success-data-toast]');
        // const toastCloseBtn = document.querySelector('[success-data-toast-close]');

        // // notification toast eventListener
        // toastCloseBtn.addEventListener('click', function () {
        // notificationToast.classList.add('closed');
        // });








    }

})();
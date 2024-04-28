(function () {
    // body...
    'use strict';

    /**
    * module.campaign_tracker Module
    *
    * Description
    */
    angular.module('module.main').controller('NotificationController', NotificationController);

    function NotificationController($scope, $mdDialog, $mdToast, $rootScope, API_PATH, appUtils) {

       
        $scope.message = "Product Added Successfully!"      
		
		// const notificationToast = document.querySelector('[success-data-toast]');
        // const toastCloseBtn = document.querySelector('[success-data-toast-close]');

        // // notification toast eventListener
        // toastCloseBtn.addEventListener('click', function () {
        // notificationToast.classList.add('closed');
        // });








    }

})();
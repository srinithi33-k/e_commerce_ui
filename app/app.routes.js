'use strict';


var app = angular.module('myAppRouter', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/main_tmpl.html',
            controller: 'homeCtrl'
        })


        // LOGIN PAGE ======================================================
        .state('Login', {
            url: '/Login',
            templateUrl: 'app/components/login/login.html',
            controller: 'LoginPageController'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'app/components/create_user/create_user.html',
            controller: 'CreateUserController'
        })

        .state('ViewProduct', {
            templateUrl: 'app/components/view_product/view_product.tmpl.html',
            controller: 'viewProductController'
        })

        .state('Cart', {
            templateUrl: 'app/components/cart/cart.tmpl.html',
            controller: 'CartController'
        })
        .state('Myorder', {
            templateUrl: 'app/components/order/my_orders.tmpl.html',
            controller: 'OrdersViewController'
        });


        // Error Page ========================================================
    //     .state('404', {
    //         url : '/404',
    //         templateUrl : 'error.html'
    //         });
    // $urlRouterProvider.otherwise('/404');

});
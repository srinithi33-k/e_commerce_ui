var app = angular.module("myApp",   [
    // 'ui.bootstrap',
    // 'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngMaterial',
    'module.main',
    'myAppRouter',
    'myFactories',
    'ngStorage'
    // 'myAppHomeService',
    // 'myAppNavbarDirective',
    // 'myAppNavbarService',
    // 'myAppLoginCtrl',
    // 'myAppLoginService'
])
// .constant('API_PATH', 'http://ec2-18-136-194-113.ap-southeast-1.compute.amazonaws.com:8000/api/');
.constant('API_PATH', 'http://localhost:8000/ecommerceapi/')


var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/welcome.html',
		controller: 'welcomeController'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/polls/:id', {
		templateUrl: '/partials/options.html',
		controller: 'optionController'
	})
	.when('/create', {
		templateUrl: '/partials/new_poll.html',
		controller: 'createController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});
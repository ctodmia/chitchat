angular.module('chitchat', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'views/chatBoxView.html', 
				controller: 'ChatBoxController'
			})

			$urlRouterProvider.otherwise('/')
	}])
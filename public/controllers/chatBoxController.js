//this is where the chat box controller will live. 
angular.module('chitchat')
	.controller('ChatBoxController', ['$scope', function($scope) {
		$scope.messages = []
		$scope.addMsg = function (msg) {
			$scope.messages.push(msg);
			$scope.newMessage = '';
		}
	}])
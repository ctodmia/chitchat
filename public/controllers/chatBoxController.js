//this is where the chat box controller will live. 
angular.module('chitchat')
	.controller('ChatBoxController', ['$scope', 'Socket', function($scope, Socket) {
		$scope.messages = []

		Socket.on('init', function(msg) {
			$scope.messages = msg.messages;
		})
		$scope.addMsg = function (msg) {
			Socket.emit('newMessage', {
				message: msg
			});
			// $scope.messages.push(msg);
			$scope.newMessage = '';
		}
		Socket.on('newMessage', function(msg) {
			$scope.messages.push(msg);
		})

	}])
app.controller('optionController', ['$scope', 'votesFactory', 'pollsFactory', 'usersFactory', '$location', '$routeParams', function($scope, votesFactory, pollsFactory, usersFactory, $location, $routeParams) {
	$scope.user = usersFactory.getUser();

	$scope.showPoll = function() {
		pollsFactory.show($routeParams.id, function(data) {
			if(data.errors) {
				console.log(data.errors);
			}
			else {
				$scope.poll = data;
			}
		});
	};
	$scope.showPoll();

	$scope.vote = function(option) {
		votesFactory.upVote($scope.poll.vote._id, option, function(data) {
			if(data.errors) {
				console.log(data.errors);
			}
			else{
				$scope.showPoll();
			}
		});
	};
}]);
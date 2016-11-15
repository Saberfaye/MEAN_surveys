app.controller('createController', ['$scope', 'votesFactory', 'pollsFactory', 'usersFactory', '$location', function($scope, votesFactory, pollsFactory, usersFactory, $location) {
	$scope.user = usersFactory.getUser();

	$scope.addPoll = function() {
		pollsFactory.create($scope.user._id, $scope.new_poll, function(data) {
			if(data.errors) {
				$scope.new_poll = {};
				$scope.errors = data.errors.errors;
			}
			else {
				votesFactory.create(data._id, function(data) {
					if(data.errors) {
						console.log(data.errors.errors);
					}
					else {
						$location.url("/dashboard");
					}
				});
			}
		});
	};
}]);
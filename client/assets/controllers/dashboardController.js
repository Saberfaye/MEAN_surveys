app.controller('dashboardController', ['$scope', 'pollsFactory', 'usersFactory', '$location', function($scope, pollsFactory, usersFactory, $location) {
	$scope.user = usersFactory.getUser();

	$scope.showPolls = function() {
		pollsFactory.index(function(data) {
			if(data.errors) {
				console.log(data.errors.errors);
			}
			else {
				$scope.polls = data;
			}
		});
	};
	$scope.showPolls();

	$scope.deletePoll = function(id) {
		pollsFactory.delete(id, function(data) {
			if(data.errors) {
				console.log(data.errors.errors);
			}
			else {
				$scope.polls = data;
			}
		});
	};

	$scope.logout = function() {
		usersFactory.resetUser();
		$location.url("/");
	};

	$scope.propertyName = "createdAt";
	$scope.reverse = false;

	$scope.sortBy = function(propertyName) {
		$scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};
}]);
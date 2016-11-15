app.factory('votesFactory', ['$http', function($http) {
	var vote = {};

	function VoteConstructor() {

		// this.index = function(callback) {
		// 	$http.get('/votes').then(function(returned_data){
		// 		callback(returned_data.data);
		// 	});
		// };

		// this.show = function(id, callback) {
		// 	$http.get('/votes/'+id).then(function(returned_data){
		// 		if (typeof(callback) == 'function'){
		// 			callback(returned_data.data);
		// 		}
		// 	});
		// }

		this.create = function(poll_id, callback) {
			$http.post('/votes/'+poll_id, {}).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};

		this.upVote = function(id, option, callback) {
			$http.put('/votes/'+id+'/'+option, {}).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};

		// this.update = function(id, updateFriend, callback) {
		// 	$http.put('/friends/'+id, updateFriend).then(function(returned_data){
		// 		if (typeof(callback) == 'function'){
		// 			callback(returned_data);
		// 		}
		// 	});
		// }

		// this.delete = function(id, callback) {
		// 	$http.delete('/friends/'+id).then(function(returned_data){
		// 		if (typeof(callback) == 'function'){
		// 			friends = returned_data.data;
		// 			callback(returned_data.data);
		// 		}
		// 	});
		// }
	}
	/*
	What is this factory returning?  Could we extend this code to be reused?
	*/
	return (new VoteConstructor());
}]);
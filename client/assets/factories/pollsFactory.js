app.factory('pollsFactory', ['$http', function($http) {
	var polls = [];

	function PollConstructor() {

		this.index = function(callback) {
			$http.get('/polls').then(function(returned_data){
				polls = returned_data.data;
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};

		this.show = function(id, callback) {
			$http.get('/polls/'+id).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		}

		this.create = function(user_id, newPoll, callback) {
			$http.post('/polls/'+user_id, newPoll).then(function(returned_data){
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

		this.delete = function(id, callback) {
			$http.delete('/polls/'+id).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		}
	}
	/*
	What is this factory returning?  Could we extend this code to be reused?
	*/
	return (new PollConstructor());
}]);
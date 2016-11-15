var mongoose = require('mongoose');
var Vote = mongoose.model('Vote');
var Poll = mongoose.model('Poll');

function VotesController() {
	// this.index = function(req, res) {
	// 	Vote.find({}, function(err, votes) {
	// 		if(err){
	// 			res.json({error: true, errors: err});
	// 		}
	// 		else {
	// 			res.json(votes);
	// 		}
	// 	})		
	// }

	// this.show = function(req, res) {
	// 	Vote.findOne({_id: req.params.id}, function(err, vote) {
	// 		if(err){
	// 			res.json({error: true, errors: err});
	// 		}
	// 		else {
	// 			res.json(vote);
	// 		}
	// 	});
	// }

	this.create = function(req, res) {
		Poll.findOne({_id: req.params.poll_id}, function(err, poll){
			req.body.option1 = 0;
			req.body.option2 = 0;
			req.body.option3 = 0;
			req.body.option4 = 0;
			req.body._poll = req.params.poll_id;

			Vote.create(req.body, function(err, vote){
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					poll.vote = vote._id;
					poll.save(function(err) {
						if(err){
							res.json({error: true, errors: err});
						}
						else {
							res.json(vote);
						}
					});
				}
			});
		});
	}

	this.updateVote = function(req, res) {
		if(req.params.option == "option1") {
			Vote.update({_id: req.params.id}, {$inc: {option1: 1}}, function(err, vote) {
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					res.json(vote);
				}
			});
		}
		else if(req.params.option == "option2") {
			Vote.update({_id: req.params.id}, {$inc: {option2: 1}}, function(err, vote) {
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					res.json(vote);
				}
			});
		}
		else if(req.params.option == "option3") {
			Vote.update({_id: req.params.id}, {$inc: {option3: 1}}, function(err, vote) {
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					res.json(vote);
				}
			});
		}
		else {
			Vote.update({_id: req.params.id}, {$inc: {option4: 1}}, function(err, vote) {
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					res.json(vote);
				}
			});
		}
	}

	// this.update = function(req, res) {
	// 	Friend.update({_id: req.params.id}, req.body, function(err) {
	// 		if(err) {
	// 			console.log("Error Updating");
	// 		}
	// 		else {
	// 			Friend.find({}, function(err, data) {
	// 				res.json(data);
	// 			});
	// 		}
	// 	});
	// };

	// this.delete = function(req, res){
	// 	Friend.remove({_id: req.params.id}, function(err){
	// 		if(err) {
	// 			console.log("Error Deleting");
	// 		}
	// 		else {
	// 			Friend.find({}, function(err, data) {
	// 				res.json(data);
	// 			});
	// 		}
	// 	});
	// };
	
}

module.exports = new VotesController();

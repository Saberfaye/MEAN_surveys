var mongoose = require('mongoose');
var Vote = mongoose.model('Vote');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

function PollsController(){
	this.index = function(req, res){
		Poll.find({})
		.populate('_user')
		.exec(function(err, polls){
			if(err){
				res.json({error: true, errors: err})
			}
			else {
				res.json(polls);
			}
		});
	}

	this.show = function(req, res) {
		Poll.findOne({_id: req.params.id})
		.populate({
			path:'vote',
			model:'Vote'
		})
		.populate({
			path:'_user',
			model:'User'
		})
		.exec(function(err, poll) {
			if(err){
				res.json({error: true, errors: err});
			}
			else {
				res.json(poll);
			}
		});
	};

	this.create = function(req, res){
		User.findOne({_id: req.params.user_id}, function(err, user){
			req.body._user = user._id;
			Poll.create(req.body, function(err, poll){
				if(err){
					res.json({error: true, errors: err});
				}
				else {
					user.polls.push(poll);
					user.save(function(err) {
						if(err){
							res.json({error: true, errors: err});
						}
						else {
							res.json(poll);
						}
					});
				}
			})
		});
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

	this.delete = function(req, res){
		Poll.remove({_id: req.params.id}, function(err){
			if(err) {
				res.json({error: true, errors: err});
			}
			else {
				Poll.find({})
				.populate('_user')
				.exec(function(err, polls){
					if(err){
						res.json({error: true, errors: err})
					}
					else {
						res.json(polls);
					}
				});
			}
		});
	};
	
}

module.exports = new PollsController();

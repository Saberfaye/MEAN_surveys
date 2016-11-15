var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
var votes = require('../controllers/votes.js');
var path = require('path');

module.exports = function(app){
	app.post('/users', function(req, res) {
		users.create(req, res);
	})
	app.get('/polls', function(req, res) {
		polls.index(req, res);
	})
	app.get('/polls/:id', function(req, res) {
		polls.show(req, res);
	})
	app.post('/polls/:user_id', function(req, res) {
		polls.create(req, res);
	})
	app.delete('/polls/:id', function(req, res) {
		polls.delete(req, res);
	})
	app.post('/votes/:poll_id', function(req, res) {
		votes.create(req, res);
	})
	app.put('/votes/:id/:option', function(req, res) {
		votes.updateVote(req, res);
	})


	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, '../../client/index.html'));
	})
}
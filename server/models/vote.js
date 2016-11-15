var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new mongoose.Schema({
	option1: { type: Number },
	option2: { type: Number },
	option3: { type: Number },
	option4: { type: Number },
	_poll: { type: Schema.Types.ObjectId, ref: 'Poll' }
}, {timestamps: true});

var Vote = mongoose.model('Vote', VoteSchema);
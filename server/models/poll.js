var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
	content: {
		type: String,
		required: [true, "Question is required"],
		minlength: [8, "Question needs to be at least 8 characters"]
	},
	option1: {
		type: String,
		required: [true, "Option1 is required"],
		minlength: [3, "Option1 needs to be at least 3 characters"]
	},
	option2: {
		type: String,
		required: [true, "Option2 is required"],
		minlength: [3, "Option2 needs to be at least 3 characters"]
	},
	option3: {
		type: String,
		required: [true, "Option3 is required"],
		minlength: [3, "Option3 needs to be at least 3 characters"]
	},
	option4: {
		type: String,
		required: [true, "Option4 is required"],
		minlength: [3, "Option4 needs to be at least 3 characters"]
	},
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	vote: {type: Schema.Types.ObjectId, ref: 'Vote'}
}, {timestamps: true});

var Poll = mongoose.model('Poll', PollSchema);
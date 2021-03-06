var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		validate: [{
			validator: function( name ) {
				return /[A-Z][a-z]+/.test( name );
			},
			message: "User name needs to begin with a capitalized letter and at least 2 letter long"
		}],
		required: [true, "User name is required"]
	},
	polls: [{type: Schema.Types.ObjectId, ref: 'Poll'}]
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
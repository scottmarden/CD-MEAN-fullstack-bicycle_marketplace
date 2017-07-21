const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

let UserSchema = new Schema({
	first_name: {
		type: String,
		required: [true, "First name is required"],
		minlength: [2, "First name must be at least 2 characters long"]
	},
	last_name: {
		type: String,
		required: [true, "Last name is required"],
		minlength: [2, "First name must be at least 2 characters long"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Password is required"],

	},
	bicycles: [{type: Schema.Types.ObjectId, ref: 'Bicycle'}]

},
{timestamps: true})

UserSchema.pre("save", function(next){
		this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
		next()
})

mongoose.model('User', UserSchema)

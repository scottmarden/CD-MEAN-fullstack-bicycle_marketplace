const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let BicycleSchema = new Schema({
	title: {
		type: String,
		required: [true, "Title is required"]
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	price: {
		type: Number,
		required: [true, "Price is required"]
	},
	location: {
		type: String,
		required: [true, "Location is required"]
	},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},

},
{timestamps: true})


mongoose.model("Bicycle", BicycleSchema)

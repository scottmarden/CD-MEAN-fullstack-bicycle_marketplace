const mongoose = require('mongoose');
const User = mongoose.model('User')
const Bicycle = mongoose.model('Bicycle')
const bcrypt = require('bcrypt');


module.exports = {
	register: (req, res) => {
		let user = new User(req.body)
		user.save( (err, savedUser) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}else{
				return res.json(savedUser);
			}
		} )
	},

	login: (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}
			if(user){
				if(bcrypt.compareSync(req.body.password, user.password)){
					res.json(user)
				}
				else{
					let errors = {error: "Invalid Username or Password"};
					res.status(400).send(errors);
				}
			}
		})
	},

	browse: (req, res) => {
		Bicycle.find({}).populate('_user').exec( (err, list) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}
			if(list){
				return res.json(list)
			}
		})

	},

	createListing: (req, res) => {
		console.log("Controller online!")
		User.findOne({email: req.body.user_email}, (err, foundUser) => {
			if(err){
				console.log("Error at find user!")
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}else{
				let bicycle = new Bicycle(req.body)
				bicycle._user = foundUser._id;
				bicycle.save( (err, savedBicycle) => {
					if(err){
						let errors = [];
						for (let x in err.errors){
							errors.push(err.errors[x].message)
						}
						res.status(400).send(errors);
					}else{
						foundUser.bicycles.push(savedBicycle);
						foundUser.save( (err, savedUser) => {
							if(err){
								let errors = [];
								for (let x in err.errors){
									errors.push(err.errors[x].message)
								}
								res.status(400).send(errors);
							}else{
								res.json(savedBicycle);
							}
						})
					}
				})
			}
		})
	}
}

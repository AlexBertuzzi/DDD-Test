const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const newUser = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, requied: true},
	meal: [{
		userId: {type: String},
		title: {type: String},
		foods: [{
			name: {type: String},
			amount: {type: Number},
			calories: {type: Number},
			protein: {type: Number},
			carbs: {type: Number},
			fat: {type: Number}
		}],
		notes: {type: String}
	}],
	food: [{
		userId: {type: String},
		name: {type: String},
    	amount: {type: Number},
    	calories: {type: Number},
    	protein: {type: Number},
    	carbs: {type: Number},
    	fat: {type: Number}
	}]
});

newUser.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

newUser.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", newUser);

module.exports = User;
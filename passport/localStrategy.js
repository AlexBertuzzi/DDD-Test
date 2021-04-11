const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(

	{
		usernameField: 'name', 
		passwordField: 'password' // not necessary, DEFAULT
	},
	function(name, password, done) {
		User.findOne({ name: name }, (err, user) => {
			console.log("you hit this");
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy
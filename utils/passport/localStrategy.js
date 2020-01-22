const User = require('../../models').User
const LocalStrategy = require('passport-local').Strategy
var bcrypt = require("bcrypt-nodejs");


const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function (username, password, done) {
		const _username = username;
		const _password = password;
		User.findOne({ where: { 'username': username } })
			.then(match => {
				// console.log(_username, match)
				const user = new User(match);
				
				if (!match) {
					return done(null, false, { message: 'Incorrect username' })
				}
								console.log(_password, "_password" , match.password,"match.password")
								console.log(bcrypt.compareSync(_password, match.password))

				if (!bcrypt.compareSync(_password, match.password)) {
					
					return done(null, false, { message: 'Incorrect password' })
				}

				console.log("alright alright alright!")

				return done(null, match)
			})
	}
)

module.exports = strategy

const User = require('../../models').User
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function (username, password, done) {
		const usernam = username;
		const passwor = password;
		User.findOne({ where: { 'username': username } })
			.then(match => {
				console.log(usernam, match)
				const user = new User(match);
				if (!match) {
					return done(null, false, { message: 'Incorrect username' })
				}
				if (!user.validPassword(password)) {
					return done(null, false, { message: 'Incorrect password' })
				}
				return done(null, match)
			})
	}
)

module.exports = strategy

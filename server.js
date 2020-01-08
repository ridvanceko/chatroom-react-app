// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
const passport = require('./utils/passport');
const db = require("./models");
const path = require('path');
const app = express()
const routes = require("./controllers");
const PORT = process.env.PORT || 8081
const Sequelize = require('sequelize');
// const db = new Sequelize('test', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

const sequelizeSessionStore = new SessionStore({
    db: db.sequelize,
});
 

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
	expressSession({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: sequelizeSessionStore,
		resave: false,
		saveUninitialized: false,
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// ==== if its production environment!
if (process.env.NODE_ENV === "production") {
	console.log("Prod Mode Enabled")
	app.use(express.static("client/build"));
}

// ====== Routing & Controllers =====
app.use(routes);

// ====== React App ======
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ====== Error handler ====
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// ====== Sync Models to Database
let force = false;

if (process.env.NODE_ENV === "development") {
	force = true;
}

// ==== Starting Server =====

db.sequelize.sync({ force: force }).then(function () {
	console.log(`Sequlize connected`)
	app.listen(PORT, () => {
		console.log(`App listening on PORT: ${PORT}`)
	})
})

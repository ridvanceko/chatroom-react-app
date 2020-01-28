// Loading evnironmental variables here
if (process.env.NODE_ENV !== "production") {
  console.log("loading dev environments");
  require("dotenv").config();
}
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const SessionStore = require("express-session-sequelize")(expressSession.Store);
const passport = require("./utils/passport");
const db = require("./models");
const path = require("path");
const app = express();
const routes = require("./controllers");
const PORT = process.env.PORT || 8081;
const Sequelize = require("sequelize");
// const db = new Sequelize('test', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

const sequelizeSessionStore = new SessionStore({
  db: db.sequelize
});

// ===== Middleware ====
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  expressSession({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false
  })
);

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ==== if its production environment!
if (process.env.NODE_ENV === "production") {
  console.log("Prod Mode Enabled");
  app.use(express.static("client/build"));
}

// ====== Routing & Controllers =====
app.use(routes);

// ====== React App ======
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ====== Error handler ====
app.use(function(err, req, res, next) {
  console.log("====== ERROR =======");
  console.error(err.stack);
  res.status(500);
});

// ====== socket.io server
var server = require('http').Server(app);
var io = require('socket.io')(server);

// ====== Sync Models to Database
let force = true;

if (process.env.NODE_ENV === "development") {
  force = false;
}

// ==== Starting Server =====

db.sequelize.sync({ force: force }).then(function() {
  console.log(`Sequlize connected`);
  server.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
});

// ============== socket.io connection
io.on("connection", socket => {
  console.log("uswr connected to socket server")
  socket.on("new user connected", msg => {
<<<<<<< HEAD
    console.log(msg);
    socket.emit("new user connected","see your msg")
=======
    // console.log("incoming from client on server",msg);
    socket.broadcast.emit("new user connected",msg)
  });
  socket.on("sent message", msg => {
    // console.log("incoming from client input on server",msg);
    socket.broadcast.emit("reflection from server",msg)
>>>>>>> c798d8b917d69e2ca0599e623ca4a9bda3f99edd
  });
});

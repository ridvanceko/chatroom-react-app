const router = require("express").Router();
const bookController = require("./book.controller");
const userController = require("./user.controller");

const authController = require("./auth.controller");

// API Routes
router.use("/api/books", bookController);

// Auth Routes
router.use("/auth", authController);

// user Routes
router.use("/users", userController);

module.exports = router;

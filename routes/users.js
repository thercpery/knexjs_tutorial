const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// Check email
router.post("/checkemail", usersController.checkEmailExists);

// Register a user
router.post("/", usersController.register);

// Get user details
router.get("/:id", usersController.getUserDetails);


module.exports = router;
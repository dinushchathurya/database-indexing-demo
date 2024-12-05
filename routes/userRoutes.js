const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes for fetching users with and without indexing
router.get("/users/index", userController.getUsersWithIndex);
router.get("/users/noindex", userController.getUsersWithoutIndex);

module.exports = router;

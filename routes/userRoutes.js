const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/index", userController.getUsersWithIndex);
router.get("/noindex", userController.getUsersWithoutIndex);

module.exports = router;

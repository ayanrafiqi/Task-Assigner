const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUsers,
  getUserTasks,
} = require("../Controller/userController");

router.route("/").get(getUsers);
router.route("/:id/mytasks").get(getUserTasks);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

module.exports = router;

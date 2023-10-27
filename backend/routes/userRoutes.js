const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUsers,
  getUserWithTask,
} = require("../Controller/userController");

router.route("/").get(getUsers);
router.route("/:id").get(getUserWithTask);
router.route("/login").post(loginUser);
router.route("register").post(registerUser);

module.exports = router;

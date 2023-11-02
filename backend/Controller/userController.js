const User = require("../model/userModel");
const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  const user = await User.findOne({ username: username });

  if (!user || password != user.password) {
    return res
      .status(400)
      .json({ error: "Username and password are invalid." });
  } else {
    res.status(200).json({
      id: user._id,
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist.Please Log in");
  } else {
    const user = await User.create({
      username,
      password,
    });
    if (user) {
      res.status(201).json({
        username: user.username,
        password: user.password,
      });
    } else {
      res.status(400);
      throw new Error("Error in creating the account");
    }
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc fetch tasks by userId
// @route Get api/tasks/userId
// @access Private

const getUserTasks = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const userTasks = await Task.find({ user: id });

  if (!userTasks) {
    res.status(400);
    throw new Error("User has no assigned tasks");
  } else {
    res.json(userTasks);
  }
});

module.exports = {
  loginUser,
  registerUser,
  getUsers,
  getUserTasks,
};

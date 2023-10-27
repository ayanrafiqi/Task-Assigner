const User = require("../model/userModel");
const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).send("username and password are required");
  }

  const user = await User.findOne({ username: username });

  if (!user || password != user.password) {
    throw new Error("Invalid UserName and Password");
  } else {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
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

  res.json({ users });
});

const getUserWithTask = asyncHandler(async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const tasks = await Task.find({ user: user._id });

  const userWithTasks = {
    _id: user._id,
    username: user.username,

    tasks: tasks,
  };

  res.json({ user: userWithTasks });
});

module.exports = {
  loginUser,
  registerUser,
  getUsers,
  getUserWithTask,
};

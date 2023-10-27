const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

const createTask = asyncHandler(async (req, res) => {
  const { user, taskname, time } = req.body;

  const task = await Task.create({
    user,
    taskname,
    time,
  });
  if (task) {
    res.status(201).json({
      user,
      taskname,
      time,
    });
  } else {
    res.status(400);
    throw new Error("Error in creating the task");
  }
});

const updateTask = asyncHandler(async (req, res) => {
  const { isCompleted } = req.body;
  const task = await Task.findById(req.params.id);

  if (task) {
    task.isCompleted = isCompleted;
    await task.save();
    res.json(task);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

module.exports = {
  createTask,
  updateTask,
};

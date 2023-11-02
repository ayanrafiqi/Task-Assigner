const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

const createTask = asyncHandler(async (req, res) => {
  const { user, tasks } = req.body;
  console.log(user);
  const task = await Task.create({
    tasks,
    user,
  });
  if (task) {
    res.status(201).json({
      user,
      tasks,
    });
  } else {
    res.status(400);
    throw new Error("Error in creating the task");
  }
});

// @desc fetch all tasks
// @route  GET api/tasks
// @access  private admin only

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});

  if (!tasks) {
    throw new Error("Admin has not created any tasks");
  } else {
    res.json(tasks);
  }
});

const updateTask = asyncHandler(async (req, res) => {
  const { isCompleted } = req.body;
  const record = await Task.findById(req.params.id);
  console.log(isCompleted);
  if (record) {
    record.tasks.isCompleted = isCompleted;
    await record.save();

    res.json({ Message: "Task Updated Successfully" });
  } else {
    res.status(400);
    throw new Error("Task not found");
  }
});

module.exports = {
  createTask,
  updateTask,
  getAllTasks,
};

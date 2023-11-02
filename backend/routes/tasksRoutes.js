const express = require("express");
const router = express.Router();
const {
  createTask,
  updateTask,
  getAllTasks,
} = require("../Controller/taskController");

router.route("/").post(createTask).get(getAllTasks);
router.route("/:id").patch(updateTask);

module.exports = router;

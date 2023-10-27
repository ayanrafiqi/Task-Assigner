const express = require("express");
const router = express.Router();
const { createTask, updateTask } = require("../Controller/taskController");

router.route("/").post(createTask);
router.route("/:id").put(updateTask);

module.exports = router;

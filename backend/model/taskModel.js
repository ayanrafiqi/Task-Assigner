const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  tasks: [
    {
      taskname: { type: String, required: true },
      time: { type: Date, required: true },
      isCompleted: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Task", taskSchema);

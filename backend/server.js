const express = require("express");
const taskRoutes = require("./routes/tasksRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
require("./config/db").connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE} mode Successfully on Port ${PORT}`
  );
});

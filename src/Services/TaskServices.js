import axios from "axios";

export const createTask = (model) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/tasks", model, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export const updateTask = (id, value) => {
  const data = { isCompleted: value };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .patch(`/api/tasks/${id}`, data, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTasks = (cb) => {
  axios
    .get("api/tasks")
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log(err);
    });
};

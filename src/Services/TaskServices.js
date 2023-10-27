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
      console.log("Cant execute ");
    });
};

export const updateTask = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .put(`/api/tasks/${id}`, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log("Cant excute ");
    });
};

import axios from "axios";

export const createTask = (model) => {
  axios
    .post("/api/tasks", model)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log("Cant execute ");
    });
};

export const updateTask = (id) => {
  axios
    .put(`/api/task/${id}`)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log("Cant excute ");
    });
};

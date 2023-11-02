import axios from "axios";

export const login = (model, cb) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/users/login", model, config)
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (model) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/users/register", model, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = (cb) => {
  axios
    .get("/api/users")
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log(err);
    });
};

export const getMyTasks = (id, cb) => {
  axios
    .get(`/api/users/${id}/mytasks`)
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log(err);
    });
};

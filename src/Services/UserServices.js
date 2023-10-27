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
      console.log("CANT EXCUTE ");
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
      console.log("CANT EXCUTE ");
    });
};

export const getUsers = (cb) => {
  axios
    .get("/api/users")
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log("CANT EXCUTE ");
    });
};

export const getUserById = (id, cb) => {
  axios
    .get(`/api/users/:${id}`)
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log("CANT EXCUTE ");
    });
};

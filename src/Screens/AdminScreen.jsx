import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Components/FormContainer";
import { createUser } from "../Services/UserServices";

const AdminScreen = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({ username: "", password: "" });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user.username !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    createUser(model);
  };

  return (
    <>
      <FormContainer>
        <h1>Create User</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={model.username}
              onChange={(e) => setModel({ ...model, username: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your passwords"
              value={model.password}
              onChange={(e) => setModel({ ...model, password: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Create User
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AdminScreen;

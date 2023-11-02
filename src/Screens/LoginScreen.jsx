import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Components/FormContainer";
import { login } from "../Services/UserServices";

export const LoginScreen = () => {
  const [model, setModel] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const StoreUserInfo = async (data) => {
    try {
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error storing user details in local storage:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(model, StoreUserInfo);
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      userInfo.username === "admin" ? navigate("/admin") : navigate("/profile");
    }
  };

  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your UserName"
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
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
};
export default LoginScreen;

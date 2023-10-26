import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FormContainer from "../Components/FormContainer";
import { createTask } from "../Services/TaskServices";

const TaskScreen = () => {
  const params = useParams();
  const [model, setModel] = useState({
    user: params.id,
    taskname: "",
    time: 0,
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    createTask(model);
    navigate("/home");
  };

  return (
    <>
      <FormContainer>
        <h1>Create Task</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="task">
            <Form.Label>TaskName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter TaskName"
              value={model.taskname}
              onChange={(e) => setModel({ ...model, taskname: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>time</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter your passwords"
              value={model.time}
              onChange={(e) => setModel({ ...model, time: e.target.value })}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Create Task
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default TaskScreen;

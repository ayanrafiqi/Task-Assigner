import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import FormContainer from "../Components/FormContainer";
import { createTask } from "../Services/TaskServices";

const TaskScreen = () => {
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [model, setModel] = useState({
    user: params.id,
    tasks: { taskname: "", time: null },
  });
  const navigate = useNavigate();

  const handleTaskChange = (e) => {
    const { name, value } = e.target;

    setModel((prevModel) => ({
      ...prevModel,
      tasks: {
        ...prevModel.tasks,
        [name]: value,
      },
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    createTask(model);
    setIsSubmitting(true);
    alert("Task assigned to user Successfully");
  };

  return (
    <>
      <FormContainer>
        <h2>Create Task for {params.id}</h2>

        <Form onSubmit={submitHandler} className="py-4">
          <Form.Group controlId="task">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Name"
              name="taskname"
              value={model.tasks.taskname}
              onChange={handleTaskChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Deadline Time</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Enter data and time"
              name="time"
              value={model.tasks.time}
              onChange={handleTaskChange}
            ></Form.Control>
          </Form.Group>{" "}
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            Create Task
          </Button>
          <Row className="py-3">
            <Col>
              <Link className="m-1" to="/users">
                Go Back
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default TaskScreen;

import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import CountdownTimer from "../Components/CountDownTimer";
import { getUserById } from "../Services/UserServices";
import { updateTask } from "../Services/TaskServices";

const ProfileScreen = () => {
  const [userData, setUserData] = useState();

  const fetchUser = () => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    getUserById(userInfo._id, setUserData);
  };

  useEffect(fetchUser, []);

  const handleTaskCompletion = (taskId) => {
    updateTask(taskId);
  };
  return (
    <div>
      <h1>{userData.username}'s Tasks And Deadline</h1>
      {userData ? (
        <div>
          <h3>Tasks:</h3>
          {userData.tasks.map((task, index) => (
            <Row key={task._id} style={{ marginBottom: "10px" }}>
              <Col md={4}>
                <p>{task.taskname}</p>
              </Col>
              <Col md={4}>
                <Form.Check
                  type="radio"
                  name={`taskCompletion-${index}`}
                  checked={task.isCompleted}
                  onChange={() => handleTaskCompletion(task._id)}
                />
              </Col>
              <Col md={4}>
                <CountdownTimer deadline={task.time} />
              </Col>
            </Row>
          ))}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
export default ProfileScreen;

import React, { useState, useEffect } from "react";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import CountdownTimer from "../Components/CountDownTimer";
import { getMyTasks } from "../Services/UserServices";
import { updateTask } from "../Services/TaskServices";

const ProfileScreen = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const { id: userId } = userInfo;

    getMyTasks(userId, (data) => {
      setUserData(data);
    });
  }, []);

  return (
    <>
      {userData ? (
        <div>
          <h1>Tasks And Deadline</h1>
          <ListGroup varaint="flush">
            {userData.map((item, index) => (
              <ListGroup.Item key={item._id} style={{ marginBottom: "10px" }}>
                <Row>
                  <Col md={4}>
                    <em>Task Name:</em>{" "}
                    <p
                      className={
                        item.tasks.isCompleted
                          ? "text-decoration-line-through"
                          : "h4"
                      }
                    >
                      {item.tasks.taskname}
                    </p>
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      type="switch"
                      name={`taskCompletion-${index}`}
                      label="Mark as Completed?"
                      checked={isCompleted}
                      disabled={item.tasks.isCompleted === true}
                      onChange={() => {
                        const updatedIsCompleted = !isCompleted;
                        setIsCompleted(updatedIsCompleted);
                        updateTask(item._id, updatedIsCompleted);
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    Time Left :<CountdownTimer deadline={item.tasks.time} />
                  </Col>
                </Row>
                {/* {console.log(isCompleted)} */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};
export default ProfileScreen;

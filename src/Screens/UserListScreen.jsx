import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../Services/UserServices";
import { getAllTasks } from "../Services/TaskServices";

const UserListScreen = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (!userInfo || userInfo.username !== "admin") {
      navigate("/");
      return;
    }
    getUsers((data) => setUsers(data));
    getAllTasks((data) => setTasks(data));
  }, [navigate]);

  const submitHandler = (userId) => {
    navigate(`/task/${userId}`);
  };

  const taskStyle = {
    textDecoration: "line-through",
  };

  return (
    <>
      <h2>User Lists</h2>
      {users && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>
                  <ul>
                    {tasks
                      .filter((item) => item.user === user._id)
                      .map((item) => (
                        <li
                          key={item._id}
                          style={item.tasks.isCompleted ? taskStyle : {}}
                        >
                          {item.tasks.taskname}
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <Button
                    onClick={() => submitHandler(user._id)}
                    className="mx-3"
                  >
                    Assign Task
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;

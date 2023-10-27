import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../Services/UserServices";

const UserListScreen = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (!userInfo || userInfo.username !== "admin") {
      navigate("/");
      return;
    }
    getUsers(setUsers);
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
              <th>Actions</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>
                  <Button onClick={() => submitHandler(user._id)}>
                    Assign Task
                  </Button>
                </td>
                <td>
                  <ul>
                    {user.tasks.map((task) => (
                      <li
                        key={task._id}
                        style={task.isCompleted ? taskStyle : {}}
                      >
                        {task.name}
                      </li>
                    ))}
                  </ul>
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

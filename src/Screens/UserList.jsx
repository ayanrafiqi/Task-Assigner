import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../Services/UserServices";

const UserListScreen = () => {
  const navigate = useNavigate();
  const fetchUsers = () => {
    getUsers(setUsers);
  };
  const [users, setUsers] = useState([]);
  useEffect(fetchUsers, []);

  const submitHandler = (userId) => {
    navigate(`/task/${userId}`);
  };

  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>
                  <Button onClick={() => submitHandler(user._id)}>
                    Assign Task
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserListScreen;

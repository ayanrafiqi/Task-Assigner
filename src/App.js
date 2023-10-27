import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./Screens/LoginScreen.1";
import AdminScreen from "./Screens/AdminScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import UserListScreen from "./Screens/UserList";
import TaskScreen from "./Screens/TaskScreen";

function App() {
  return (
    <Router>
      <main className="py-3 mx-3">
        <h1>Task of Rational Tab</h1>
        <Container>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/users" element={<UserListScreen />} />
            <Route path="/task/:id" element={<TaskScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;

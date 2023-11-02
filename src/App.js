import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginScreen from "./Screens/LoginScreen";
import AdminScreen from "./Screens/AdminScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import UserListScreen from "./Screens/UserListScreen";
import TaskScreen from "./Screens/TaskScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3 mx-3">
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
      <Footer />
    </Router>
  );
}

export default App;

import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useState } from "react";
import Projects from "./ManagerDashboard/Projects"
import Tasks from "./ManagerDashboard/Tasks"
import Resources from "./ManagerDashboard/Resources"

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<Navigate to="/dashboard/projects" />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
          <Route path="/dashboard/resources" element={<Resources />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

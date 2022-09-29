import './App.css';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ManagerScreen from "./ManagerScreen";
import ResourceScreen from "./ResourceScreen";
import ManagerLogin from "./ManagerLogin";
import useToken from "./useToken";
import useRToken from "./useRToken";
import Projects from "./ManagerComponents/Projects"
import Tasks from "./ManagerComponents/Tasks"
import Resources from "./ManagerComponents/Resources"
import Dashboard from './ManagerComponents/Dashboard';
import Authentication from './Authentication';
import ResourceLogin from './ResourceLogin';
import ResourceDashboard from './ResourceComponents/ResourceDashboard';
import ResourceTasks from './ResourceComponents/ResourceTasks';
import Reports from './ResourceComponents/Reports';


function App() {
  const { mtoken, setMToken } = useToken("managertoken");
  const { rtoken, setRToken } = useRToken("resourcetoken");

  if (!mtoken && !rtoken) {
    return (
      <Routes>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Authentication setMToken={setMToken} setRToken={setRToken} />} >
          <Route index element={<Navigate to="manager" />} />
          <Route path="manager" element={<ManagerLogin setToken={setMToken} />} />
          <Route path="resource" element={<ResourceLogin setToken={setRToken} />} />
        </Route>

        <Route
          path="*"
          element={
            <Navigate to="login" />
          }
        />
      </Routes>
    )
  }
  if (mtoken) {
    return (
      <Routes>
        <Route index element={<Navigate to="ManagerConsole" />} />
        <Route path="ManagerConsole" element={<ManagerScreen setToken={setMToken} />} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="main" />
          <Route path="tasks" element={<Tasks />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="*" element={<Navigate to="ManagerConsole" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route index element={<Navigate to="ResourceConsole" />} />
        <Route path="ResourceConsole" element={<ResourceScreen setToken={setRToken} />} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ResourceDashboard />} />
          <Route path="tasks" element={<ResourceTasks />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<Navigate to="ResourceConsole" />} />
      </Routes>
    );
  }

}

export default App;

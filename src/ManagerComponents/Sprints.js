import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Backlogs from './SprintSidebarComponents/Backlogs';
import Resources from './SprintSidebarComponents/SprintResources';
import Tasks from './SprintSidebarComponents/SprintTasks';
import SprintsMain from './SprintsMain';
import SprintDetails from './SprintDetails';

export default function Sprints({ module, setModule }) {
    const [sprintData, setSprintData] = useState([]);
    const [sprint, setSprint] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5179/api/Manager/v1/Projects/Modules/Sprints?modId=${module.moduleId}`)
            .then(response => response.json())
            .then(data => { console.log(data); setSprintData(data); })
    }, []);

    useEffect(() => {
        if (Object.keys(sprint).length !== 0) {
            //redirect to tasks page
            navigate("tasks");
        } else {
            navigate("spmain");
        }
    }, [sprint]);

    return (
        <div>
            <Routes>
                <Route path="/*" element={<Navigate to="spmain" />} />
                <Route path="spmain" element={<SprintsMain module={module} setModule={setModule} sprintData={sprintData} setSprint={setSprint} />} />
                <Route path="tasks" element={<SprintDetails sprint={sprint} setSprint={setSprint} />} >
                    <Route index element={<Navigate to="resources" />} />
                    <Route path="resources" element={<Resources sprint={sprint} />} />
                    <Route path="sptasks/*" element={<Tasks sprint={sprint} />} />
                    <Route path="backlogs" element={<Backlogs sprint={sprint} />} />
                </Route>
            </Routes>
        </div>
    )
}
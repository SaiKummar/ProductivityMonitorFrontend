import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import Sprints from './Sprints';

export default function ProjectView({ project, setProject }) {
    const [moduleData, setModuleData] = useState([]);
    const [module, setModule] = useState({});

    const navigate = useNavigate();

    //runs every time module state changes
    useEffect(() => {
        if (Object.keys(module).length !== 0) {
            //redirect to sprints page
            navigate("sprints");
        } else {
            navigate("details");
        }
    }, [module]);

    useEffect(() => {
        fetch(`http://localhost:5179/api/Manager/v1/Projects/Modules?projectId=${project.projectId}`)
            .then(response => response.json())
            .then(data => { console.log(data); setModuleData(data); })
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/*" element={<Navigate to="details" />} />
                <Route path="details" element={<ProjectDetails project={project} moduleData={moduleData} setModule={setModule} setProject={setProject} />} />
                <Route path="sprints/*" element={<Sprints module={module} setModule={setModule} />} />
            </Routes>
        </div>
    )
}
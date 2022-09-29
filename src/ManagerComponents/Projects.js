import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectView from './ProjectView';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ProjectMain from './ProjectMain';

export default function Projects() {
    const [pdata, setPData] = useState([]);
    const [project, setProject] = useState({});

    const navigate = useNavigate();

    //runs once when the projects component loads
    useEffect(() => {
        fetch("http://localhost:5179/api/Manager/v1/Projects")
            .then(response => response.json())
            .then(data => { console.log(data); setPData(data); })
    }, []);

    //runs every time project state changes
    useEffect(() => {
        if (Object.keys(project).length !== 0) {
            //redirect to project view page
            navigate("view");
        } else {
            navigate("main");
        }
    }, [project])

    return (
        <div>
            <Routes>
                <Route path="/*" element={<Navigate to="main" />} />
                <Route path="main" element={<ProjectMain pdata={pdata} setProject={setProject} />} />
                <Route path="view" element={<ProjectView project={project} setProject={setProject} />} />
            </Routes>
        </div>
    )

}
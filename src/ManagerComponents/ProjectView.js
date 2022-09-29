import React, { useState, useEffect } from 'react';
import './ProjectView.css';

export default function ProjectView({ project, setProject }) {
    const [moduleData, setModuleData] = useState([]);

    function handleBack() {
        setProject({});
    }

    useEffect(() => {
        fetch(`http://localhost:5179/api/Manager/v1/Projects/Modules?projectId=${project.projectId}`)
            .then(response => response.json())
            .then(data => { console.log(data); setModuleData(data); })
    }, []);

    return (
        <div>
            <button onClick={handleBack}>back</button>
            <h2>{project.projectName}</h2>
            <p>{project.projectDescription}</p>
            <p>status: {project.projectStatus}</p>
            <h2>Modules</h2>
            <div className='modulesflexbox'>
                {
                    moduleData.map((module, i) =>
                        <div key={i} className="modulecontainer">
                            <h3>{module.moduleName}</h3>
                            <p>{module.moduleDescription}</p>
                        </div>
                    )
                }
            </div>
            <div className="popupbox">
                <h1>Tasks</h1>
            </div>
        </div>
    )
}
import React from 'react';
import './ProjectDetails.css';

export default function ProjectDetails({ project, moduleData, setModule, setProject }) {

    function handleClick(module) {
        setModule(module);
    }

    function handleBack() {
        setProject({});
    }

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
                        <div key={i} className="modulecontainer" onClick={() => handleClick(module)}>
                            <h3>{module.moduleName}</h3>
                            <p>{module.moduleDescription}</p>
                        </div>
                    )
                }
            </div>
            <h2>Overall Resources</h2>
            <p>Manager: </p>

        </div>
    )
}
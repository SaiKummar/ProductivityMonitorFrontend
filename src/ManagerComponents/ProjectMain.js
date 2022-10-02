import React, { useEffect } from 'react';
import './ProjectMain.css';

export default function ProjectMain({ project, pdata, setProject }) {
    useEffect(() => {
        if (Object.keys(project).length !== 0) {
            setProject({})
        }
        console.log("inside projectmain");
    }, []);
    function handleClick(project) {
        setProject(project);
    }
    return (
        <div>
            <h2 className="pageheading">My Projects</h2>
            <div className='projectsflexbox'>
                {
                    pdata.map((project, i) => (
                        <div key={i} className="projectcontainer" onClick={() => handleClick(project)}>
                            <h2 className="autoShowHide">{project.projectName}</h2>
                            <p className="autoShowHide">{project.projectDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
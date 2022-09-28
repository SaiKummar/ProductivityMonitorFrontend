import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
    const [pdata, setPData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5179/api/Manager/v1/Projects")
            .then(response => response.json())
            .then(data => { console.log(data); setPData(data); })
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            <div className='projectsflexbox'>
                {
                    pdata.map(project =>
                        <div className="projectcontainer">
                            <h2>{project.projectName}</h2>
                            <p>{project.projectDescription}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
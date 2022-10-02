import React, { useEffect, useState } from 'react';
import "./SprintResources.css";

export default function Resources({ sprint }) {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5179/api/Manager/v1/Sprint/Resources?sprintId=${sprint.sprintId}`)
            .then(response => response.json())
            .then(data => { console.log(data); setResources(data); })
    }, []);

    return (
        <div>
            <h1>Resources</h1>
            <table className='resourcetable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map((resource, i) => (
                            <tr key={i}>
                                <td>{resource.userName}</td>
                                <td>{resource.roleName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
import React, { useEffect, useState } from 'react';

export default function ResourceSelector({ setMaster }) {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5179/api/Manager/v1/Resources")
            .then(response => response.json())
            .then(data => { console.log(data); setResources(data); })
    }, []);

    function handleClick(resource) {
        setMaster(resource);
    }

    return (
        <div>
            <h3>Resources</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map((resource, i) => (
                            <tr key={i} onClick={() => handleClick(resource)}>
                                <td>{resource.userEmployeeId}</td>
                                <td>{resource.userName}</td>
                                <td>{resource.email}</td>
                                <td>{resource.roleName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
import React, { useEffect, useState } from 'react';

export default function SubTask({ taskid }) {
    const [subtasks, setSubTasks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5179/api/Manager/v1/Tasks/Subtasks?taskId=${taskid}`)
            .then(response => response.json())
            .then(data => { console.log(data); setSubTasks(data); })
    }, [taskid]);

    return (
        <div>
            {
                subtasks.map((task, i) => (
                    <div key={i}>
                        <h3>Title: {task.taskName}</h3>
                        <p>Description: {task.taskDescription}</p>
                        <p>Status: {task.taskstatus}</p>
                        <p>Number of Hours Required: {task.numberOfHoursRequired}</p>
                        <p>Expires on: {task.expirationDate ? task.expirationDate.substring(0, 10) : task.expirationDate}</p>
                    </div>
                ))
            }
        </div>
    )
}
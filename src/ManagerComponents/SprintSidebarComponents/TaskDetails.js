import React, { useContext } from 'react';
import SubTask from './SubTask';
import { TaskContext } from './TaskContext';

export default function TaskDetails() {
    const task = useContext(TaskContext)
    console.log("inside taskdetails");

    return (
        <div>
            <h3>Title: {task.task_Name}</h3>
            <p>Description: {task.task_Desc}</p>
            <p>Status: {task.task_status}</p>
            <p>Number of Hours Required: {task.task_Noh_Reqd}</p>
            <p>Expires on: {task.task_exp_datetime ? task.task_exp_datetime.substring(0, 10) : task.task_exp_datetime}</p>
            <h3>Subtasks:</h3>
            <SubTask taskid={task.task_Id} />
        </div>
    )
}
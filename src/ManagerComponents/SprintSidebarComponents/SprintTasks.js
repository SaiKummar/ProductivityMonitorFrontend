import React, { useEffect, useState, } from 'react';
import { TaskContext } from './TaskContext';
import TaskDetails from './TaskDetails';
import "./SprintTasks.css"
import CreateTaskPopup from './CreateTaskPopup';

export default function Tasks({ sprint }) {

    const [tasks, setTasks] = useState([]);
    const [mytask, setMyTask] = useState({});
    const [nodata, setnodata] = useState(false);
    const [display, setDisplay] = useState("modal off");

    function handleClick(task) {
        console.log(task);
        setMyTask(task);
    }

    async function getData() {
        let mydata = await fetch(`http://localhost:5179/api/Manager/v1/Sprint/Tasks?sprintId=${sprint.sprintId}`)
            .then(response => response.json())
            .then(data => { console.log("after then"); console.log(data); return data; });
        return mydata;
    }

    useEffect(() => {
        async function fetchData() {
            let result = await getData();
            if (result.length !== 0) {
                setTasks(result);
                setMyTask(result[0]);
            } else {
                setnodata(true);
            }
        }
        fetchData();
    }, []);

    function createTask() {
        setDisplay("modal on");
    }

    if (!nodata) {
        if (Object.keys(mytask).length !== 0) {
            return (
                <TaskContext.Provider value={mytask}>
                    <button onClick={createTask}>create new task</button>
                    <div className="navflexbox">
                        <div className="sidenav">
                            {
                                tasks.map((task, i) => (
                                    <div key={i} className="sidenavitem" onClick={() => handleClick(task)}>
                                        <span className="itemcontent">{task.task_Name}</span>
                                        <span className="itemcontent">Status: {task.task_status}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='maincontent'>
                            <TaskDetails />
                        </div>
                    </div>
                    <div>
                        <CreateTaskPopup sprint={sprint} display={display} setDisplay={setDisplay} />
                    </div>
                </TaskContext.Provider>
            )
        } else {
            return (<div>Loading...</div>)
        }
    } else {
        return (<div>No data available</div>)
    }
}
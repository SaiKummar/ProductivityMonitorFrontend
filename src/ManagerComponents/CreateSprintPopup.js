import React, { useEffect, useState } from 'react';
import "./CreateSprintPopup.css";
import ResourceSelector from './ResourceSelector';

export default function CreateSprintPopup({ module, display, setDisplay }) {
    const [master, setMaster] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    //adds an event listener to listen to escape key press
    useEffect(() => {
        if (display === "modal on") {
            console.log("adding event listener");
            document.body.addEventListener('keydown', handleKeyDown);
        }
    }, [display]);

    //close popup when escape key is pressed
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            document.body.removeEventListener('keydown', handleKeyDown);
            setDisplay("modal off");
        }
    }

    //make an api call create button is pressed
    function handleSubmit(event) {
        event.preventDefault();
        const requestObj = {
            sprintId: 0,
            sprintModuleId: module.moduleId,
            sprintMaster: master.id,
            sprintStartDate: startDate,
            sprintEndDate: endDate,
            userName: "string"
        }
        fetch(`http://localhost:5179/api/Manager/v1/Sprints`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObj)
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => { console.log(data); alert("sprint created sucessfully!"); })
            .catch(error => {
                console.log(error);
            })
    }

    //close popup box when x button is pressed
    function handleClose() {
        document.body.removeEventListener('keydown', handleKeyDown);
        setDisplay("modal off");
    }

    return (
        <div className={display}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Module: {module.moduleName}</h2>
                <div className='createflexbox'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Master</p>
                                <input type="text" value={master === "" ? "select master from table" : master.userName + " (id: " + master.userEmployeeId + ")"} onChange={event => setMaster(event.target.value)} />
                            </label>
                            <label>
                                <p>Start Date</p>
                                <input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} />
                            </label>
                            <label>
                                <p>End Date</p>
                                <input type="date" value={endDate} onChange={event => setEndDate(event.target.value)} />
                            </label>
                            <div>
                                <button type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                    <div className='selectordiv'>
                        <ResourceSelector setMaster={setMaster} />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import "./CreateTaskPopup.css";

export default function CreateTaskPopup({ sprint, display, setDisplay }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [hours, setHours] = useState("");
    const [expDate, setExpDate] = useState("");
    const [supe, setSupe] = useState("");


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
        // event.preventDefault();
        // const requestObj = {
        //     sprintId: 0,
        //     sprintModuleId: module.moduleId,
        //     sprintMaster: master.id,
        //     sprintStartDate: startDate,
        //     sprintEndDate: endDate,
        //     userName: "string"
        // }
        // fetch(`http://localhost:5179/api/Manager/v1/Sprints`, {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(requestObj)
        // })
        //     .then(response => {
        //         if (response.status !== 200) {
        //             throw new Error(response.status);
        //         }
        //         return response.json();
        //     })
        //     .then(data => { console.log(data); alert("sprint created sucessfully!"); })
        //     .catch(error => {
        //         console.log(error);
        //     })
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
                <h2>Create new task under sprint</h2>
                <div className='createflexbox'>
                    <div>
                        <form id="formid" onSubmit={handleSubmit}>
                            <label>
                                <p>Name</p>
                                <input type="text" value={name} onChange={event => setName(event.target.value)} />
                            </label>
                            <label>
                                <p>Type</p>
                                <input type="text" value={type} onChange={event => setType(event.target.value)} />
                            </label>
                            <label>
                                <p>Description</p>
                                <textarea form="formid" rows="3" cols="50" value={desc} onChange={event => setDesc(event.target.value)} />
                            </label>
                            <label>
                                <p>No of hours required</p>
                                <input type="number" value={hours} onChange={event => setHours(event.target.value)} />
                            </label>
                            <label>
                                <p>Expires on</p>
                                <input type="date" value={expDate} onChange={event => setExpDate(event.target.value)} />
                            </label>
                            <label>
                                <p>Supervisor</p>
                                <input type="text" value={supe} onChange={event => setSupe(event.target.value)} />
                            </label>
                            <div>
                                <button type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import CreateSprintPopup from './CreateSprintPopup';
import "./SprintsMain.css";

export default function SprintsMain({ module, setModule, sprintData, setSprint }) {
    const [display, setDisplay] = useState("modal off");
    //go to details page
    function handleBack() {
        setModule({});
    }

    //set sprint on click to rerender projectview
    function handleClick(sprint) {
        setSprint(sprint);
    }

    function createSprint() {
        setDisplay("modal on");
    }

    return (
        <div>
            <button onClick={handleBack}>back</button>
            <button onClick={createSprint}>Create New sprint</button>
            <h2>Sprints of Module: {module.moduleName}</h2>
            <div className='sprintContainer'>
                {
                    sprintData.map((sprint, i) => (
                        <div className="sprintdetails" key={i} onClick={() => handleClick(sprint)}>
                            <p>Sprint Master: {sprint.userName}</p>
                            <p>Start date: {sprint.sprintStartDate.substring(0, 10)}</p>
                            <p>End date: {sprint.sprintEndDate.substring(0, 10)}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <CreateSprintPopup module={module} display={display} setDisplay={setDisplay} />
            </div>
        </div >
    )
}
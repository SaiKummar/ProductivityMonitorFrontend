import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./SprintDetails.css";

export default function SprintDetails({ sprint, setSprint }) {
    //go to details page
    function handleBack() {
        setSprint({});
    }

    return (
        <div>
            <button onClick={handleBack}>back</button>
            <div className="box">
                <div className='sidebar'>
                    <ul className='topBarul'>
                        <li><Link to="resources">Resources</Link></li>
                        <li><Link to="sptasks">Tasks</Link></li>
                        <li><Link to="backlogs">Backlogs</Link></li>
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
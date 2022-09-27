import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Dashboard.css';
import ProfileButton from "./ManagerDashboard/ProfileButton"

export default function Dashboard() {
    return (
        <div>
            <div className='mainheader'>
                <ul className="header">
                    <li><Link to="/dashboard/projects">Projects</Link></li>
                    <li><Link to="/dashboard/tasks">Tasks</Link></li>
                    <li><Link to="/dashboard/resources">Resources</Link></li>
                </ul>
                <ProfileButton />
            </div>
            <Outlet />
        </div>
    );
}
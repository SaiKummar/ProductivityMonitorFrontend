import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Screen.css';
import ProfileButton from "./ManagerComponents/ProfileButton"

export default function ManagerScreen({ setToken }) {
    function handleLogout() {
        setToken(null);
    }
    return (
        <div>
            <h2 className="pageheading">Productivity Monitor - Manager</h2>
            <div className='mainheader'>
                <ul className="header">
                    <li><Link to="dashboard">Home</Link></li>
                    {/* <li><Link to="analytics">Analytics</Link></li> */}
                    <li><Link to="projects/*">Projects</Link></li>
                    <li><Link to="tasks">Tasks</Link></li>
                    {/* <li><Link to="sprints">Sprints</Link></li> */}
                    <li><Link to="resources">Resources</Link></li>
                    {/* <li><Link to="pastdue">Past Due</Link></li> */}
                    <li className='btnlist'><button onClick={handleLogout}>logout</button></li>
                </ul>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}
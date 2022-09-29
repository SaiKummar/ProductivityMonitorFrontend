import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../Screen.css';

export default function ResourceScreen({ setToken }) {
    function handleLogout() {
        setToken(null);
    }
    return (
        <div>
            <h3>Productivity Monitor - Resource</h3>
            <div className='mainheader'>
                <ul className="header">
                    <li><Link to="dashboard">Home</Link></li>
                    <li><Link to="tasks">Tasks</Link></li>
                    <li><Link to="reports">Reports</Link></li>
                    <li className='btnlist'><button onClick={handleLogout}>logout</button></li>
                </ul>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}
import React from 'react';
import { Link, Outlet } from "react-router-dom";
export default function Authentication({ setMToken, setRToken }) {
    return (
        <div>
            <h3>Welcome</h3>
            <nav>
                <Link to="manager">Login as Manager</Link>
                <Link to="resource">Login as Resource</Link>
            </nav>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}
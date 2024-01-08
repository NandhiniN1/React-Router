import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <div>
            <nav className='flex  bg-green-400 p-4x'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
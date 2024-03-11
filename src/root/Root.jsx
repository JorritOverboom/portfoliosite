import { NavLink, Link, Outlet, useOutlet } from 'react-router-dom';
import './Root.css'
import Home from '../home/Home.jsx';
import menu from "./images/Hamburger_icon.svg.png";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getToDoTasksFromDataBase } from '../to_do_list/task-slices/toDoListSlice.js';
import { getInProgressTasksFromDataBase } from '../to_do_list/task-slices/inProgressListSlice.js';
import { getFinishedTasksFromDataBase } from '../to_do_list/task-slices/finishedListSlice.js';

const Root = () => {

    const outlet = useOutlet();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToDoTasksFromDataBase());
        dispatch(getInProgressTasksFromDataBase());
        dispatch(getFinishedTasksFromDataBase());
    }, []);

    return (
        <div className='all'>
            <div className='navBar'>
                <div className='name'>
                    <h1><Link to='/' className='link home-h1'>Jorrit Overboom</Link></h1>
                </div>
                <ul className='menu'>
                    <li><NavLink to='/study' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Study</NavLink></li>
                    <li><NavLink to='/resume' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Resume</NavLink></li>
                    <li><NavLink to='/to-do-list' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>To do list</NavLink></li>
                </ul>
                <div className='login'>
                    <p><Link to='/log-in' className='link'>Log in</Link></p>
                </div>
            </div>
            <div className='navMob'>
                <Link to='/' className='link'><h1 className='nameMob'>Jorrit Overboom</h1></Link>
                <Link to='/menu'><img className='menuIcon' src={menu} /></Link>
            </div>
            <div className='outlet'>
                { outlet ? (<Outlet />) : (<Home />)}
            </div>
        </div>
    )
}

export default Root;
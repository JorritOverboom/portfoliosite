
import './Root.css'
import Home from '../home/Home.jsx';
import menu from "./images/Hamburger_icon.svg.png";
import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useOutlet, useLocation } from 'react-router-dom';
import { logoutUser, checkLoggedIn } from '../utils/usersAPI';

const Root = () => {

    const outlet = useOutlet();
    const location = useLocation();

    const [ loggedIn, setLoggedIn ] = useState(false);

    const logSetter = async() => {
        try {
            const response = await checkLoggedIn();
            const loggedInValue = response?.loggedIn || false;
            setLoggedIn(loggedInValue);
        } catch (error) {
            console.log('Error in logSetter', error);
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        logSetter();
    }, [location.pathname]);

    const logout = () => {
        logoutUser();
    };

    const accessToDoList = () => {
        if (loggedIn === true) {
            return ('/to-do-list');
        } else {
            return ('/login')
        }
    }

    return (
        <div className='all'>
            <div className='navBar'>
                <div className='name'>
                    <h1><Link to='/' className='link home-h1'>Jorrit Overboom</Link></h1>
                </div>
                <ul className='menu'>
                    <li><NavLink to='/study' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Study</NavLink></li>
                    <li><NavLink to='/resume' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Resume</NavLink></li>
                    <li><NavLink to={accessToDoList()} className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>To do list</NavLink></li>
                </ul>
                <div className='login'>
                { loggedIn ? (<Link to='/login' onClick={logout} className='link'>Logout</Link>) : (<Link to='/login' className='link'>Log in</Link>)}
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
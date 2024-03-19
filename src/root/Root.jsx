
import './Root.css'
import Home from '../home/Home.jsx';
import blackMenu from './images/black_hamburger_menu.png';
import whiteMenu from "./images/white_hamburger_menu.png";
import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useOutlet, useLocation } from 'react-router-dom';
import { checkLoggedIn } from '../utils/usersAPI';

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

    const accessToDoList = () => {
        if (loggedIn === true) {
            return ('/to-do-list');
        } else {
            return ('/login')
        }
    }

    const isHomePath = location.pathname === '/';
    const allClassName = isHomePath ? 'all home-path' : 'all';
    const outletHome = isHomePath ? 'outlet outlet-home' : 'outlet';
    const homeMenu = isHomePath ? whiteMenu : blackMenu;

    return (
        <div className={allClassName}>
            <div className='navBar-parent'>
                <div className='navBar'>
                    <div className='name'>
                        <h1><Link to='/' className='home-h1'>Jorrit Overboom</Link></h1>
                    </div>
                    <ul className='menu'>
                        <li><NavLink to='/skills' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>My Skills</NavLink></li>
                        <li><NavLink to={accessToDoList()} className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Demo: to do list</NavLink></li>
                        <li><NavLink to='/about-me' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>About Me</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='navMob'>
                <Link to='/' className='link'><h1 className='nameMob'>Jorrit Overboom</h1></Link>
                <Link to='/menu'><img className='menuIcon' src={homeMenu} /></Link>
            </div>
            <div className={outletHome}>
                { outlet ? (<Outlet />) : (<Home />)}
            </div>
        </div>
    )
}

export default Root;
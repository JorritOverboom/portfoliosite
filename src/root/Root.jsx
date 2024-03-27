
import './Root.css'
import Home from '../home/Home.jsx';
import blackMenu from './images/black_hamburger_menu.png';
import whiteMenu from "./images/white_hamburger_menu.png";
import React from 'react';
import { NavLink, Link, Outlet, useOutlet, useLocation } from 'react-router-dom';

const Root = () => {

    const outlet = useOutlet();
    const location = useLocation();
    
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
                        <li><NavLink to='/skills' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>MY SKILLS</NavLink></li>
                        <li><NavLink to='/to-do-list' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>DEMO: TO DO LIST</NavLink></li>
                        <li><NavLink to='/travel' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>MY TRAVELS</NavLink></li>
                        <li><NavLink to='/about-me' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>ABOUT ME</NavLink></li>
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
import { NavLink, Link, Outlet, useNavigate, useOutlet } from 'react-router-dom';
import './Root.css'
import Home from '../home/Home.jsx';
import menu from "./Images/Hamburger_icon.svg.png";

const Root = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goForward = () => {
        navigate(1);
    };

    const outlet = useOutlet();

    return (
        <div className='all'>
            <div className='navBar'>
                <div className='name'>
                    <h1><Link to='/' className='link'>Jorrit Overboom</Link></h1>
                </div>
                <ul className='menu'>
                    <li><NavLink to='/study' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Study</NavLink></li>
                    <li><NavLink to='/resume' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Resume</NavLink></li>
                    <li><NavLink to='/to-do-list' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>To do list</NavLink></li>
                </ul>
                <div className='login'>
                    <p><Link to='/login' className='link'>Log in</Link></p>
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

import './Menu.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    const exitMenu = () => {
        navigate(-1);
    }

    return (
        <div className='menuList'>
            <div className='exit'>
                <i onClick={exitMenu}>X</i>
            </div>
            <ul className='menuMob'>
                <li><NavLink to='/' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Home</NavLink></li>
                <li><NavLink to='/study' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Study</NavLink></li>
                <li><NavLink to='/resume' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Resume</NavLink></li>
                <li><NavLink to='/to-do-list' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>To do list</NavLink></li>
                <li><NavLink to='/profile' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Profile</NavLink></li>
                <li><NavLink to='/log-in' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Log in</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;
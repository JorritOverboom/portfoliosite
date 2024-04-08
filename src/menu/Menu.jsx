
import './Menu.css'
import exit from './exit_button.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {

    // React hooks
    const navigate = useNavigate();

    const exitMenu = () => {
        navigate(-1);
    }

    return (
        <div className='menuList'>
            <div className='exit'>
                <img src={exit} alt='exit icon' onClick={exitMenu} />
            </div>
            <ul className='menuMob'>
                <li><NavLink to='/' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Home</NavLink></li>
                <li><NavLink to='/skills' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>My Skills</NavLink></li>
                <li><NavLink to='/to-do-list' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Demo: to do list</NavLink></li>
                <li><NavLink to='/about-me' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>About Me</NavLink></li>
                <li><NavLink to='/travel' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>My Travels</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;
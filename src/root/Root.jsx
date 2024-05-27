
import './Root.css'
import Home from '../home/Home.jsx';
import blackMenu from './images/black_hamburger_menu.png';
import whiteMenu from "./images/white_hamburger_menu.png";
import { React } from 'react';
import { NavLink, Link, Outlet, useOutlet, useLocation } from 'react-router-dom';
import { switchToDark } from './darkModeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Root = () => {

    // React hooks
    const outlet = useOutlet();
    const location = useLocation();
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.darkMode.darkMode);
    
    // This checks whether the path is on the root, if it is, it will change the className to make the home page look different
    const isHomePath = location.pathname === '/';
    const darkAllClassName = isDark ? 'h-screen grid bg-black bg-normal font-spaceGrotesk text-white' : 'h-screen grid bg-normal font-spaceGrotesk bg-white text-black';
    const homeAllClassName = isDark ? 'h-screen grid bg-bali bg-night bg-bottom font-spaceGrotesk' : 'h-screen grid bg-china bg-day font-spaceGrotesk';
    const allClassName = isHomePath ? homeAllClassName : darkAllClassName;
    const outletHome = isHomePath ? 'w-1/3 justify-self-end mt-40 text-4xl mr-48' : 'outlet';
    const homeMenu = isHomePath ? whiteMenu : blackMenu;
    const navBarParent = isHomePath ? 'px-6 bg-gradientToTop' : 'px-6';
    const navBarStyle = isDark ? 'flex justify-between border-b border-white border-solid border-opacity-40 py-5 px-5' : 'flex justify-between border-b border-black border-solid border-opacity-40 py-5 px-5';
    const homeNavBarStyle = isHomePath ? 'flex justify-between border-b border-white border-solid border-opacity-40 py-5 px-5' : navBarStyle;
    const navBarLinks = isDark ? 'text-white ml-10 text-xl hover:underline underline-offset-4' : 'text-black ml-10 text-xl hover:underline underline-offset-4';
    const homeNavBarLinks = isHomePath ? 'text-white ml-10 text-xl hover:underline underline-offset-4' : navBarLinks;
    const navBarName = isDark ? 'text-white text-4xl font-bold hover:text-customBlue' : 'text-black text-4xl font-bold hover:text-customBlue';
    const homeNavBarName = isHomePath ? 'text-white text-4xl font-bold hover:text-customBlue' : navBarName;

    return (
        <div className={allClassName}>
            <div className={navBarParent}>
                <div className={homeNavBarStyle}>
                    <div>
                        <h1><Link to='/' className={homeNavBarName} id='name'>Jorrit Overboom</Link></h1>
                    </div>
                    <ul className='flex justify-right items-center mr-5 tracking-wider'>
                        <li><label class="relative inline-flex cursor-pointer items-center">
                                <input id="switch" type="checkbox" class="peer sr-only" />
                                <label for="switch" class="hidden"></label>
                                <div onMouseUp={() => dispatch(switchToDark())} class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                            </label>
                        </li>
                        <li><NavLink
                         to='/skills' className={homeNavBarLinks}>MY SKILLS</NavLink></li>
                        <li><NavLink
                         to='/to-do-list' className={homeNavBarLinks}>DEMO: TO DO LIST</NavLink></li>
                        <li><NavLink
                         to='/travel' className={homeNavBarLinks}>MY TRAVELS</NavLink></li>
                        <li><NavLink
                         to='/about-me' className={homeNavBarLinks}>ABOUT ME</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='navMob'>
                <Link to='/' className='link'><h1 className='nameMob'>Jorrit Overboom</h1></Link>
                <Link to='/menu'><img className='menuIcon' src={homeMenu} alt='menu icon' /></Link>
            </div>
            <div className={outletHome}>
                { outlet ? (<Outlet />) : (<Home />)}
            </div>
        </div>
    )
}

export default Root;

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
    const allClassTemplate = 'h-screen grid sm:grid-rows-11 grid-rows-16 font-spaceGrotesk'
    const darkAllClassName = isDark ? `${allClassTemplate} bg-black text-white bg-normal` : `${allClassTemplate} bg-white text-black bg-normal`;
    const homeAllClassName = isDark ? `${allClassTemplate} bg-bali bg-night bg-bottom bg-mobNight` : `${allClassTemplate} sm:bg-china bg-chinaMob bg-day bg-mobDay`;
    const allClassName = isHomePath ? homeAllClassName : darkAllClassName;
    const outletHome = isHomePath ? 'sm:row-start-4 sm:row-end-10 sm:w-1/3 sm:justify-self-end mt-40 sm:text-4xl sm:mr-48 sm:items-start justify-self-center w-4/5 text-xl' : 'sm:row-start-2 sm:row-end-12 sm:flex sm:flex-col sm:items-center sm:flex-wrap overflow-y-auto px-2 sm:px-72';
    const navBarParent = isHomePath ? 'px-6 bg-gradientToTop sm:block hidden row-span-1' : 'px-6 sm:block hidden';
    const navBarTemplate = `flex justify-between border-b border-opacity-40 py-5 px-5`;
    const navBarStyle = `${navBarTemplate} ${isDark ? `border-white` : `border-black`}`;
    const homeNavBarStyle = isHomePath ? `${navBarTemplate} border-white` : navBarStyle;
    const navBarLinksTemplate = `ml-10 text-xl hover:underline underline-offset-4`;
    const navBarLinks = `${navBarLinksTemplate} ${isDark? `text-white` : `text-black`}`;
    const homeNavBarLinks = isHomePath ? `${navBarLinksTemplate} text-white` : navBarLinks;
    const navBarNameTemplate = `text-4xl font-bold hover:text-customBlue`;
    const navBarName = `${navBarNameTemplate} ${isDark ? `text-white` : `text-black`}`;
    const homeNavBarName = isHomePath ? `${navBarNameTemplate} text-white` : navBarName;
    const darkMenu = isDark ? whiteMenu : blackMenu;
    const homeMenu = isHomePath ? whiteMenu : darkMenu;
    const darkNameMob = isDark ? `text-white` : `text-black`;
    const homeNameMob = isHomePath ? `text-white` : darkNameMob;


    return (
        <div className={allClassName}>
            <div className={navBarParent}>
                <div className={homeNavBarStyle}>
                    <div>
                        <h1><Link to='/' className={homeNavBarName} id='name'>Jorrit Overboom</Link></h1>
                    </div>
                    <ul className='flex justify-right items-center mr-5 tracking-wider'>
                        <li>
                            <label class="relative inline-flex cursor-pointer items-center">
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
            <div className='sm:hidden flex flex-row justify-between mr-4 ml-2 mt-2'>
                <Link to='/' className='link'><h1 className={`nameMob text-2xl ${homeNameMob}`}>Jorrit Overboom</h1></Link>
                <Link to='/menu'><img className='menuIcon w-7 mt-px' src={homeMenu} alt='menu icon' /></Link>
            </div>
            <div className={outletHome}>
                { outlet ? (<Outlet />) : (<Home />) }
            </div>
        </div>
    )
}

export default Root;
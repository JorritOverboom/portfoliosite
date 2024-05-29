
import './Menu.css'
import exit from './exit_button.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchToDark } from '../root/darkModeSlice';

const Menu = () => {

    // React hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const exitMenu = () => {
        navigate(-1);
    }

    return (
        <div className='menuList mb-40'>
            <div className='exit w-full flex justify-end pr-3'>
                <svg className='w-8' onClick={() => exitMenu()} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
            </div>
            <ul className='menuMob flex flex-col justify-center items-center'>
                <li className='text-4xl mt-5'><NavLink to='/'>HOME</NavLink></li>
                <li className='text-4xl mt-5'><NavLink to='/skills'>MY SKILLS</NavLink></li>
                <li className='text-4xl mt-5'><NavLink to='/to-do-list'>DEMO: TO DO LIST</NavLink></li>
                <li className='text-4xl mt-5'><NavLink to='/travel'>MY TRAVELS</NavLink></li>
                <li className='text-4xl mt-5'><NavLink to='/about-me'>ABOUT ME</NavLink></li>
                <li className='flex items-center flex-col text-4xl mt-5'>
                    <p className='mt-10'>Dark Mode:</p>
                    <label class="relative inline-flex cursor-pointer items-center">
                        <input id="switch" type="checkbox" class="peer sr-only" />
                        <label for="switch" class="hidden"></label>
                        <div onMouseUp={() => dispatch(switchToDark())} class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
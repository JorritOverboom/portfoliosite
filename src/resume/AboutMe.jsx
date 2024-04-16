
import { useEffect, useLayoutEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import './AboutMe.css';
import profile_image from './Images/profile_picture.png';
import location_image from './Images/location.png';
import birthday_image from './Images/birthday.png';
import license_image from './Images/license.png';
import Resume from './Resume';

const AboutMe = () => {

    const location = useLocation();

    // Scroll to the top of the page upon landing on the page
    useEffect(() => {
        const element = document.getElementById('about-me');
        setTimeout(() => {
        if (element) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
        }, 500)
    }, []);    

        // scroll to top of page after a page transition.
        // useLayoutEffect(() => {
        //     setTimeout(() => {
        //         document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
        //     }, 100);
        // }, [location.pathname]);


    return (
        <div className='about-me' id='about-me'>
            <h2>About me</h2>
            <div className='intro'>
                <div className='profile-picture'><img src={profile_image} alt='me'></img></div>
                <div className='about-me-description'>
                    <p>My name is Jorrit Overboom, a 32-year-old born and raised resident of Breda, The Netherlands. I have always been drawn to the world of problem-solving, finding joy in unraveling complex puzzles, much like the ones presented in mathematics, my favorite subject in school. While my professional journey initially began in sales, my current passion lies in programming.</p>
                    <p>Programming, to me, is a puzzle waiting to be solved. I love the challenge it presents and find immense satisfaction in crafting solutions. As I venture into this new field, I aspire to secure a junior position as a software developer. I am eager to immerse myself in this trade and gain invaluable insights into the workings of the industry.</p>
                    <p>Over the past 9 years, I have been, on and off, backpacking across the globe, occasionally pausing to take on various jobs to finance my travels. While the allure of exploration never fades, I have reached a point in my life where I seek stability and the opportunity to acquire a professional skill.</p>
                    <p>With a diverse work history, I possess a knack for adapting to new environments and quickly mastering new tasks. I am keen on exploring both front-end and back-end development, aiming for a full-stack experience. I'm eager to delve into various projects, whether it's building websites or developing innovative apps, to continuously learn and grow in this dynamic field.</p>
                </div>  
                <div className='my-name'>
                    <h4>Jorrit Overboom</h4>
                </div>
                <div className='info-icons'>
                    <ul>
                        <li><img src={location_image} alt='location icon'></img><p>Breda, The Netherlands</p></li>
                        <li><img src={birthday_image} alt='birthday icon'></img><p>17-09-1991</p></li>
                        <li><img src={license_image} alt='license icon'></img><p>Driving license</p></li>
                    </ul>
                </div>
            </div>
            <Resume />
        </div>
    )
}

export default AboutMe;
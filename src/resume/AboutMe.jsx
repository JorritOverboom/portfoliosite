
import { useEffect } from 'react';
import './AboutMe.css';
import profile_image from './Images/profile_picture.png';
import location_image from './Images/location.png';
import birthday_image from './Images/birthday.png';
import license_image from './Images/license.png';
import Resume from './Resume';

const AboutMe = () => {

    // Scroll to the top of the page upon landing on the page
    useEffect(() => {
        const element = document.getElementById('about-me');
        if (element && window.innerWidth > 480) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);    

    return (
        <div className='about-me w-11/12' id='about-me'>
            <h2>About me</h2>
            <div className='intro grid grid-cols-3 grid-rows-3'>
                <div className='profile-picture col-span-1 row-span-1 row-span-2'><img src={profile_image} alt='me'></img></div>
                <div className='about-me-description col-span-2 row-span-1 row-span-2 ml-5 mt-5'>
                    <p className='mb-2'>My name is Jorrit Overboom, a 32-year-old born and raised resident of Breda, The Netherlands. I have always been drawn to the world of problem-solving, finding joy in unraveling complex puzzles, much like the ones presented in mathematics, my favorite subject in school. While my professional journey initially began in sales, my current passion lies in programming.</p>
                    <p className='mb-2'>Programming, to me, is a puzzle waiting to be solved. I love the challenge it presents and find immense satisfaction in crafting solutions. As I venture into this new field, I aspire to secure a junior position as a software developer. I am eager to immerse myself in this trade and gain invaluable insights into the workings of the industry.</p>
                    <p className='mb-2'>Over the past 9 years, I have been, on and off, backpacking across the globe, occasionally pausing to take on various jobs to finance my travels. While the allure of exploration never fades, I have reached a point in my life where I seek stability and the opportunity to acquire a professional skill.</p>
                    <p className='mb-2'>With a diverse work history, I possess a knack for adapting to new environments and quickly mastering new tasks. I am keen on exploring both front-end and back-end development, aiming for a full-stack experience. I'm eager to delve into various projects, whether it's building websites or developing innovative apps, to continuously learn and grow in this dynamic field.</p>
                </div>  
                <div className='my-name h-40 row-span-2 col-span-1 bg-customBlue text-5xl flex justify-center items-center'>
                    <h4>Jorrit Overboom</h4>
                </div>
                <div className='info-icons h-40 row-span-2 col-span-2 flex items-center'>
                    <ul>
                        <li className='m-3 flex '><img className='h-7 w-7 mr-3' src={location_image} alt='location icon'></img><p>Breda, The Netherlands</p></li>
                        <li className='m-3 flex '><img className='h-7 w-7 mr-3' src={birthday_image} alt='birthday icon'></img><p>17-09-1991</p></li>
                        <li className='m-3 flex '><img className='h-7 w-7 mr-3' src={license_image} alt='license icon'></img><p>Driving license</p></li>
                    </ul>
                </div>
            </div>
            <Resume />
        </div>
    )
}

export default AboutMe;
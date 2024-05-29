
import { useEffect } from 'react';
// import './AboutMe.css';
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
    
    // Recurring components styling
    const pStyling = 'mb-2';
    const listStyling = 'sm:m-3 my-2 flex';
    const imgStyling = 'h-7 w-7 mr-3';

    return (
        <div className='sm:w-11/12' id='about-me'>
            <h2>About me</h2>
            <div className='grid sm:grid-cols-3 sm:grid-rows-3'>
                <div className='order-1 sm:col-span-1 sm:row-span-2'><img src={profile_image} alt='me'></img></div>
                <div className='order-3 sm:order-2 sm:col-span-2 sm:row-span-2 sm:ml-5 sm:mt-5'>
                    <p className={pStyling}>My name is Jorrit Overboom, a 32-year-old born and raised resident of Breda, The Netherlands. I have always been drawn to the world of problem-solving, finding joy in unraveling complex puzzles, much like the ones presented in mathematics, my favorite subject in school. While my professional journey initially began in sales, my current passion lies in programming.</p>
                    <p className={pStyling}>Programming, to me, is a puzzle waiting to be solved. I love the challenge it presents and find immense satisfaction in crafting solutions. As I venture into this new field, I aspire to secure a junior position as a software developer. I am eager to immerse myself in this trade and gain invaluable insights into the workings of the industry.</p>
                    <p className={pStyling}>Over the past 9 years, I have been, on and off, backpacking across the globe, occasionally pausing to take on various jobs to finance my travels. While the allure of exploration never fades, I have reached a point in my life where I seek stability and the opportunity to acquire a professional skill.</p>
                    <p className={pStyling}>With a diverse work history, I possess a knack for adapting to new environments and quickly mastering new tasks. I am keen on exploring both front-end and back-end development, aiming for a full-stack experience. I'm eager to delve into various projects, whether it's building websites or developing innovative apps, to continuously learn and grow in this dynamic field.</p>
                </div>  
                <div className='order-2 sm:order-3 sm:h-40 h-28 sm:row-span-2 sm:col-span-1 bg-customBlue sm:text-5xl text-4xl flex justify-center items-center text-white mb-10'>
                    <h4>Jorrit Overboom</h4>
                </div>
                <div className='order-4 h-40 sm:row-span-2 sm:col-span-2 flex items-center'>
                    <ul>
                        <li className={listStyling}><img className={imgStyling} src={location_image} alt='location icon'></img><p>Breda, The Netherlands</p></li>
                        <li className={listStyling}><img className={imgStyling} src={birthday_image} alt='birthday icon'></img><p>17-09-1991</p></li>
                        <li className={listStyling}><img className={imgStyling} src={license_image} alt='license icon'></img><p>Driving license</p></li>
                    </ul>
                </div>
            </div>
            <Resume />
        </div>
    )
}

export default AboutMe;

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
        if (element) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);    


    return (
        <div className='about-me' id='about-me'>
            <h2>About me</h2>
            <div className='intro'>
                <div className='profile-picture'><img src={profile_image} alt='me'></img></div>
                <div className='about-me-description'>
                    <p>My name is Jorrit Overboom, a 32-year-old born and raised resident of Breda, The Netherlands. I have always been drawn to the world of problem-solving, finding joy in unraveling complex puzzles, much like the ones presented in mathematics, my favorite subject in school. While my professional journey initially began in sales, my current passion lies in programming.</p>
                    <p>Programming, to me, is a puzzle waiting to be solved. I love the challenge it presents and find immense satisfaction in crafting solutions. As I venture into this new field, I aspire to secure a junior position as a software developer. I am eager to immerse myself inthis trade and gain invaluable insights into the workings of the industry.</p>
                    <p>Over the past 9 years, I have been, on and off, backpacking across the globe, occasionally pausing to take on various jobs to finance my travels. While the allure of exploration never fades, I have reached a point in my life where I seek stability and the opportunity to acquire a professional skill.</p>
                    <p>With a diverse work history, I possess a knack for adapting to new environments and quickly mastering new tasks. Now, I am ready to channel my passion for problem-solving into a fulfilling career in programming.</p>
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

import './AboutMe.css';
import profile_image from './Images/profile_picture.png';
import location_image from './Images/location.png';
import birthday_image from './Images/birthday.png';
import license_image from './Images/license.png';
import Resume from './Resume';

const AboutMe = () => {

    return (
        <div className='about-me' id='about-me'>
            <h2>About me</h2>
            <div className='intro'>
                <div className='profile-picture'><img src={profile_image}></img></div>
                <div className='about-me-description'>
                    <p>My name is Jorrit Overboom, a 32-year-old born and raised resident of Breda, The Netherlands. I have always been drawn to the world of problem-solving, finding joy in unraveling complex puzzles, much like the ones presented in mathematics, my favorite subject in school. While my professional journey initially began in sales, my current passion lies in programming.</p>
                    <p>Programming, to me, is an intricate puzzle waiting to be solved. I relish the challenge it presents and find immense satisfaction in crafting solutions. As I venture into this new field, I aspire to secure a junior position as a software developer. I am eager to immerse myself in the intricacies of the trade and gain invaluable insights into the workings of the industry.</p>
                    <p>Over the past 9 years, I have been, on and off, backpacking across the globe, occasionally pausing to take on various jobs to fuel my travels. While the allure of exploration never fades, I have reached a juncture where I seek stability and the opportunity to acquire a tangible skill.</p>
                    <p>With a diverse work history, I possess a knack for adapting to new environments and quickly mastering new tasks. Now, I am ready to channel my passion for problem-solving into a fulfilling career in programming.</p>
                </div>  
                <div className='my-name'>
                    <h4>Jorrit Overboom</h4>
                </div>
                <div className='info-icons'>
                    <ul>
                        <li><img src={location_image}></img><p>Breda, The Netherlands</p></li>
                        <li><img src={birthday_image}></img><p>17-09-1991</p></li>
                        <li><img src={license_image}></img><p>Driving license</p></li>
                    </ul>
                </div>
            </div>
            <Resume />
        </div>
    )
}

export default AboutMe;
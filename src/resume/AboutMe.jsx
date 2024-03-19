
import './AboutMe.css';
import profile_image from './Images/profile_picture.JPG';
import location_image from './Images/location.png';
import birthday_image from './Images/birthday.png';
import license_image from './Images/license.png';
import Resume from './Resume';
import Travel from './Travel';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='intro'>
                <div className='profile-picture'><img src={profile_image}></img></div>
                <div className='about-me-description'>
                    <h2>About me</h2>
                    <p>My name is Jorrit Overboom, I am 32 years of age and I live in Breda, The Netherlands. For the past 9 years of my life I have been, on and off, backpacking around the world, having taken on a variety of jobs to finance the journey. Even though traveling around the world is a neverending quest, I am at a point in my life in which I want to settle down and learn a real trade. Having worked so many different jobs I easily adapt to new situations and learn fast. Even though my original trade started as a salesman, I have now taken interest in programming. Mathematics at school was my favourite subject and I enjoy making puzzles. Coding to me is like puzzling and I enjoy finding a solution to make a code work. Being new in this field I am hoping to land a junior position as a software developer so I can learn the trade and gain insight in how this sector works.</p>
                </div>  
                <div className='my-name'>
                    <h3>Jorrit Overboom</h3>
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
            <Travel />
        </div>
    )
}

export default AboutMe;
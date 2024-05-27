
import { useEffect } from 'react';
import './Skills.css';
import certificate from './Images/certificate.png';
import { useSelector } from 'react-redux';

const Skills = () => {

    const isDark = useSelector((state) => state.darkMode.darkMode);
    
    // Scroll to the top of the page upon landing on the page
    useEffect(() => {
        const element = document.getElementById('skills');
        if (element && window.innerWidth > 480) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);    

    return (
        <div className={isDark ? 'w-11/12 bg-black text-white' : 'w-11/12'} id='skills'>
            <h2>An overview of my code skills</h2>
            <div className='skills-intro'>
                <h3>Skills I have learned through <a className='text-customBlue underline' href='https://www.codecademy.com/' target='_blank' rel='noreferrer'>Codecademy</a></h3>
                <p className='w-3/4'>The skills below I have learned through the 'Full-stack Engineer career path' course on Codecademy which I completed to the very end. This course got me very excited about coding in general and I hope to keep learning and apply my skills to real projects.</p>
            </div>
            <div className='w-4/5 grid-cols-2 grid grid-rows-2 gap-4 my-20'>
                <div className='mb-5'>
                    <h4 className='mb-2'>WEB DEVELOPMENT FOUNDATIONS & INTERACTION</h4>
                    <ul className='list-disc ml-5'>
                        <li>Fundamentals of HTML</li>
                        <li>Fundamentals of CSS</li>
                        <li>Fundamentals of JavaScript</li>
                        <li>Fundamentals of Git and GitHub</li>
                        <li>Web Accessibility</li>
                        <li>Deploying a Website</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h4 className='mb-2'>FRONT-END DEVELOPMENT</h4>
                    <ul className='list-disc ml-5'>
                        <li>JavaScript Testing</li>
                        <li>Async JavaScript and HTTP Requests</li>
                        <li>Fundamentals of React</li>
                        <li>Fundamentals of Redux</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h4 className='mb-2'>BACK-END DEVELOPMENT</h4>
                    <ul className='list-disc ml-5'>
                        <li>Build a Back-End with Express.js</li>
                        <li>User Authentication & Authorization</li>
                        <li>Database Basics</li>
                        <li>Fundamentals of PostgreSQL</li>
                        <li>Back-End and Feature Testing</li>
                        <li>Fundamentals of Operating Systems</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h4 className='mb-2'>FULL-STACK DEVELOPMENT</h4>
                    <ul className='list-disc ml-5'>
                        <li>Connecting Front-End to Back-End</li>
                        <li>Deploying Web Applications</li>
                        <li>Web & Data Security Fundamentals</li>
                        <li>DevOps Fundamentals</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </div>
            </div>
            <div className='certificate mb-16'>
                <h3>My certificate for finishing the course</h3>
                <div className='certificate-container'>
                    <img src={certificate} alt='certificate' />
                </div>
            </div>
            <div className='github'>
                <h3>My GitHub</h3>
                <p>On my GitHub page you can read my README, where I describe the technical approach I have used for this website and where a display of the code used to build it, can be found via the link below:</p>
                <p><a className='text-customBlue underline mt-12' href='https://github.com/JorritOverboom/portfoliosite' target='_blank' rel='noreferrer'>https://github.com/JorritOverboom/portfoliosite</a></p>
            </div>
        </div>
    )
}

export default Skills;
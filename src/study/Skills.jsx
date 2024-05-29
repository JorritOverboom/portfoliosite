
import { useEffect } from 'react';
// import './Skills.css';
import certificate from './Images/certificate.png';

const Skills = () => {
    
    // Scroll to the top of the page upon landing on the page
    useEffect(() => {
        const element = document.getElementById('skills');
        if (element && window.innerWidth > 480) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);    

    // Recurring components styling
    const aStyling = 'text-customBlue underline';
    const skillsDivStyling = 'mb-5';
    const h4Styling = 'mb-2';
    const ulStyling = 'list-disc ml-5';

    return (
        <div className='sm:w-11/12' id='skills'>
            <h2>An overview of my code skills</h2>
            <div className='skills-intro'>
                <h3 className='mb-3'>Skills I have learned through <a className={aStyling} href='https://www.codecademy.com/' target='_blank' rel='noreferrer'>Codecademy</a></h3>
                <p className='sm:w-3/4'>The skills below I have learned through the 'Full-stack Engineer career path' course on Codecademy which I completed to the very end. This course got me very excited about coding in general and I hope to keep learning and apply my skills to real projects.</p>
            </div>
            <div className='sm:w-4/5 sm:grid-cols-2 sm:grid sm:grid-rows-2 sm:gap-4 sm:my-20 mb-20'>
                <div className={skillsDivStyling}>
                    <h4 className={h4Styling}>WEB DEVELOPMENT FOUNDATIONS & INTERACTION</h4>
                    <ul className={ulStyling}>
                        <li>Fundamentals of HTML</li>
                        <li>Fundamentals of CSS</li>
                        <li>Fundamentals of JavaScript</li>
                        <li>Fundamentals of Git and GitHub</li>
                        <li>Web Accessibility</li>
                        <li>Deploying a Website</li>
                    </ul>
                </div>
                <div className={skillsDivStyling}>
                    <h4 className={h4Styling}>FRONT-END DEVELOPMENT</h4>
                    <ul className={ulStyling}>
                        <li>JavaScript Testing</li>
                        <li>Async JavaScript and HTTP Requests</li>
                        <li>Fundamentals of React</li>
                        <li>Fundamentals of Redux</li>
                    </ul>
                </div>
                <div className={skillsDivStyling}>
                    <h4 className={h4Styling}>BACK-END DEVELOPMENT</h4>
                    <ul className={ulStyling}>
                        <li>Build a Back-End with Express.js</li>
                        <li>User Authentication & Authorization</li>
                        <li>Database Basics</li>
                        <li>Fundamentals of PostgreSQL</li>
                        <li>Back-End and Feature Testing</li>
                        <li>Fundamentals of Operating Systems</li>
                    </ul>
                </div>
                <div className={skillsDivStyling}>
                    <h4 className={h4Styling}>FULL-STACK DEVELOPMENT</h4>
                    <ul className={ulStyling}>
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
            <div className='github mb-40 text-sm'>
                <h3>My GitHub</h3>
                <p>On my GitHub page you can read my README, where I describe the technical approach I have used for this website and where a display of the code used to build it, can be found via the link below:</p>
                <p className='mt-2'><a className={aStyling} href='https://github.com/JorritOverboom/portfoliosite' target='_blank' rel='noreferrer'>https://github.com/JorritOverboom/portfoliosite</a></p>
            </div>
        </div>
    )
}

export default Skills;
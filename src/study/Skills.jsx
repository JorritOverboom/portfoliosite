
import './Skills.css';
import certificate from './Images/certificate.png';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='skills-intro'>
                <h2>Skills I have learned through <a href='https://www.codecademy.com/' target='_blank'>Codecademy</a></h2>
                <p>The skills below I have learned through the 'Full-stack Engineer career path' course on Codecademy which I completed to the very end. This course got me very excited about coding in general and I hope to keep learning and apply my skills to real projects.</p>
            </div>
            <div className='full-stack'>
                <h2>Full-Stack Engineer</h2>
                <p>The following skils I have learnt through this career path:</p>
                <div className='modules'>
                    <div className='module1'>
                        <h3>Web Development Foundations & Interaction</h3>
                        <ul>
                            <li>Fundamentals of HTML</li>
                            <li>Fundamentals of CSS</li>
                            <li>Fundamentals of JavaScript</li>
                            <li>Fundamentals of Git and GitHub</li>
                            <li>Web Accessibility</li>
                            <li>Deploying a Website</li>
                        </ul>
                    </div>
                    <div className='module2'>
                        <h3>Front-End Development</h3>
                        <ul>
                            <li>JavaScript Testing</li>
                            <li>Async JavaScript and HTTP Requests</li>
                            <li>Fundamentals of React</li>
                            <li>Fundamentals of Redux</li>
                        </ul>
                    </div>
                    <div className='module3'>
                        <h3>Back-End Development</h3>
                        <ul>
                            <li>Build a Back-End with Express.js</li>
                            <li>User Authentication & Authorization</li>
                            <li>Database Basics</li>
                            <li>Fundamentals of PostgreSQL</li>
                            <li>Back-End and Feature Testing</li>
                            <li>Fundamentals of Operating Systems</li>
                        </ul>
                    </div>
                    <div className='module4'>
                        <h3>Full-Stack Development</h3>
                        <ul>
                            <li>Connecting Front-End to Back-End</li>
                            <li>Deploying Web Applications</li>
                            <li>Web & Data Security Fundamentals</li>
                            <li>DevOps Fundamentals</li>
                            <li>Data Structures</li>
                            <li>Algorithms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='certificate'>
                <h2>My certificate</h2>
                <div className='certificate-container'>
                    <img src={certificate} />
                </div>
            </div>
            <div className='github'>
                <h2>My GitHub</h2>
                <p>On my Github page you can read my README, describing the technical approach I have used for this website and displaying the code used to build it.</p>
                <p><a href='' target='_blank'></a></p>
            </div>
        </div>
    )
}

export default Skills;
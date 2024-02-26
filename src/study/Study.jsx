
import './Study.css';
import certificate from './Images/certificate.png';

const Study = () => {
    return (
        <div className='study'>
            <h2>Codecademy</h2>
            <p>Codecademy is an online platform which provides a significant amount of free and paid programming related courses.</p>
            <p>In the 'pro' subscription you can make use of the career paths, which is a curriculum of lessons, quizzes, articles, videos and projects teaching you all the basics of the chosen career paths</p>
            <p>One such career path I have done myself: 'Full-Stack Engineer'.</p>
            <br></br>
            <h2>Full-Stack Engineer</h2>
            <p>The following skils I have learnt through this career path:</p>
            <ul>
                <li>Web Development Foundations & Interaction</li>
                <ul>
                    <li>Fundamentals of HTML</li>
                    <li>Fundamentals of CSS</li>
                    <li>Fundamentals of JavaScript</li>
                    <li>Fundamentals of Git and GitHub</li>
                    <li>Web Accessibility</li>
                    <li>Deploying a Website</li>
                </ul>
                <br></br>
                <li>Front-End Development</li>
                <ul>
                    <li>JavaScript Testing</li>
                    <li>Async JavaScript and HTTP Requests</li>
                    <li>Fundamentals of React</li>
                    <li>Fundamentals of Redux</li>
                </ul>
                <br></br>
                <li>Back-End Development</li>
                <ul>
                    <li>Build a Back-End with Express.js</li>
                    <li>User Authentication & Authorization</li>
                    <li>Database Basics</li>
                    <li>Fundamentals of PostgreSQL</li>
                    <li>Back-End and Feature Testing</li>
                    <li>Fundamentals of Operating Systems</li>
                </ul>
                <br></br>
                <li>Full-Stack Development</li>
                <ul>
                    <li>Connecting Front-End to Back-End</li>
                    <li>Deploying Web Applications</li>
                    <li>Web & Data Security Fundamentals</li>
                    <li>DevOps Fundamentals</li>
                    <li>Data Structures</li>
                    <li>Algorithms</li>
                </ul>
            </ul>
            <br></br>
            <h2>My certificate</h2>
            <img src={certificate} />
        </div>
    )
}

export default Study;
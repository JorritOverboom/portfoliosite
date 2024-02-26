
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h2>Welcome</h2>
            <p>Hello, welcome to my website. My name is Jorrit Overboom and for the past couple of months I have studied and finished the 'Full-Stack Engineer' course on Codecademy.com.</p>
            <p>This website is meant as a display of my newly learnt skills. Aside of the obvious front-end display, it also has a back-end. Please browse through it to learn more about who I am and what I have learned through the course.</p>
            <br></br>
            <h2>About the website</h2>
            <p>The following pages have been added to this website:</p>
            <ul>
                <li>Home page (which you are on now and can be navigated to through by clicking my name on the topleft of the website): this is meant as an introduction to the website;</li>
                <li>Study page (which can be navigated to through the navigation bar at the top on a computer, or through the menu on the topright on a mobile): here you can read a description of what exactly I have learned from Codecademy;</li>
                <li>Resume page (which can be navigated to through the navigation bar at the top on a computer, or through the menu on the topright on a mobile): to learn more about me as a person and my past studies and jobs;</li>
                <li>To do list page (which can be navigated to through the navigation bar at the top on a computer, or through the menu on the topright on a mobile): make a list of tasks, move them to a 'in progress' field and mark them as 'finished';</li>
                <li>Log in page (which can be navigated to by clicking on the word on the topright of the website, or through the menu on the topright on a mobile): to log in to your profile.</li>
            </ul>
            <p>By signing up for a profile and logging in to it, you can save your to do list.</p>
            <p>Additionally you can go back or forward a page by clicking on the corresponding button, or arrow on mobile, at the bottom of the website.</p>
            <p>This website has been modified to be displayed on a computer browser and on a smartphone.</p>
        </div>
    )
}

export default Home;
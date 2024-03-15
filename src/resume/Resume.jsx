
import './Resume.css';
import profile_image from './Images/profile_picture.JPG';
import location_image from './Images/location.png';
import birthday_image from './Images/birthday.png';
import license_image from './Images/license.png';

const Resume = () => {
    return (
        <div className='resume'>
            <div className='intro'>
                <div className='profile-picture'><img src={profile_image}></img></div>
                <div className='about-me'>
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
            <div className='resume-list'>
                <div className='working-experience'>
                    <div className='working-name'><h2>Working Experiences</h2></div>
                    <div></div>
                    <div className='working-name'>
                        <h4>Wheelchair mechanic</h4>
                        <p>Raamsdonkveer, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>Initially I was asked to deliver and pick up wheelchairs at locations around the country, however the job instantly turned out to be me becoming a wheelchair mechanic. I worked in a workshop in Raamsdonkveer for the majority of 2022. I was responsible for resizing existing wheelchairs to fit the size of the client which it was requested for. This involved me knowing a variaty of wheelchairs and their associated parts. Knowing which tools to use and how. Seeming as I was the main mechanic, I had to monitor other freelance mechanics (we were understaffed), do the administration, communicate with the office for missing parts or corrections on the workingform and teach other colleagues parts of my job in case I would get sick.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Production worker</h4>
                        <p>Helmond, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>For a few months I worked for Lightyear in Helmond in 2021. An ambitious company designing and producing solar panel powered cars. I was asked to assist the solar team to produce a variaty of solar panels for the car for a testing phase. This involved me having to carefully align all the existing parts of a solar panel and prepare them for being heated in a large oven.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Bicycle messenger</h4>
                        <p>Breda, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>This was my main job for years, working to save up money, go traveling and coming back to it once my funds were depleted. At average I made 60km a day, cycling all around Breda to deliver packages to clients. This could be anything for anyone including law firms, dentists, city councils, pharmacies and people who have ordered products online. The packages would be documents, dental stuff, medicine, clothes, electronics, bike parts, anything small enough to fit the bags or bikes. Initially I did everyone on my own city bike, but eventually the company got electronic cargo bikes, allowing us to be able to carry more than we ever did before.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Construction worker</h4>
                        <p>Wellington, New Zealand</p>
                    </div>
                    <div className='working-description'>
                        <p>At the end of 2019 I resided in Wellington for a while working as a construction worker. Right in the middle of the city a new building was built. I had to carry around a lot of steel, push wheelbarrows full of concrete around the site and use a variaty of tools to do whatever choirs they made me do.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Landscaper</h4>
                        <p>Melbourne, Australia</p>
                    </div>
                    <div className='working-description'>
                        <p>In 2019 and 2020, before and after I went to New Zealand, and before the pandemic happened, I worked as a landscaper in Melbourne. This involved me making a lot of cement mixes, grinding stones for pathways, pushing around wheelbarrows full of cement or sand, a lot of digging with shoveles and planting trees.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Order picker</h4>
                        <p>Breda, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>To save up money for my travel I made in 2019, I worked as an order picker at Abbott at the end of 2018. I had to load and unload trucks with electronic pallet jacks and stack pallets full of products.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Mover</h4>
                        <p>Perth, Australia</p>
                    </div>
                    <div className='working-description'>
                        <p>In late 2016 I worked as a mover in Perth. This involved me going around the city for months, going to the clients their houses to either move all their stuff into trucks or move all their stuff into their new houses from the truck. This job was challenging for its long hours (12 hours a day) and scorching heat (40 degrees summer).</p>
                    </div>
                    <div className='working-name'>
                        <h4>Hospality</h4>
                        <p>Breda, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>From 2012 until 2018 I have bartended at Mezz and Belcrum Beach in Breda.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Stagehand</h4>
                        <p>The Netherlands and Belgium</p>
                    </div>
                    <div className='working-description'>
                        <p>In the summer of 2012 I helped build festivals and events like Lowlands, Pukkelpop, Cirque Du Soleil and many others. The work involved me carrying around anything that was asked of me.</p>
                    </div>
                    <div className='working-name'>
                        <h4>Salesman</h4>
                        <p>Prinsenbeek, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>From 2008 to 2011 I worked in a videorental store which also sold computers. Being 17 to 20 years of age, it was my responsibility to open and close the store by myself, help customers, deal with complaints and make sales.</p>
                    </div>
                    <div className='working-space'></div>
                    <div></div>
                    <div className='working-name'><h2>Education</h2></div>
                    <div></div>
                    <div className='working-name'>
                        <h4>Florijn college</h4>
                        <p>Breda, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>Retailmanagement niveau 4, started in 2008, graduated in 2011</p>
                    </div>
                    <div className='working-name'>
                        <h4>Newmancollege</h4>
                        <p>Breda, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>VMBO TL, started in 2004, graduated in 2008</p>
                    </div>
                    <div className='working-name'>
                        <h4>De Griffioen</h4>
                        <p>Prinsenbeek, The Netherlands</p>
                    </div>
                    <div className='working-description'>
                        <p>Primary school, 1996 to 2004</p>
                    </div>
                </div>
                <div className='extra-info'>
                    <div className='traits'>
                        <h2>Traits</h2>
                        <ul>
                            <li>Communicative</li>
                            <li>Friendly</li>
                            <li>Specific</li>
                            <li>Independent</li>
                            <li>Problemsolver</li>
                            <li>Adventurous</li>
                            <li>Honest</li>
                        </ul>
                    </div>
                    <div className='languages'>
                        <h2>Languages</h2>
                        <ul>
                            <li>Dutch: mother tongue</li>
                            <li>English: fluent</li>
                            <li>German: basic</li>
                        </ul>
                    </div>
                    <div className='hobbys'>
                        <h2>Hobby's</h2>
                        <ul>
                            <li>Gaming on computers and consoles</li>
                            <li>Watching movies</li>
                            <li>Reading books</li>
                            <li>Travelling</li>
                            <li>Camping</li>
                            <li>Hitchhiking</li>
                            <li>Hiking</li>
                            <li>Listening to music and going to concerts and festivals</li>
                            <li>Drinking craft beers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
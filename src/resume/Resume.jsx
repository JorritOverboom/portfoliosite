
// import './Resume.css';

const Resume = () => {

    // Recurring components styling
    const resumeNameStyling = 'col-span-1 mb-2';
    const h5Styling = 'text-customBlue text-xl';
    const resumePStyling = 'font-bold';
    const resumeDescriptionStyling = 'col-span-2 mb-8';
    const mBottomStyling = 'mb-5';
    const h4Styling = 'mb-2';
    const ulStyling = 'ml-3';

    return (
        <div className='mb-40'>
            <h3 className='sm:mb-10 mt-10'>Working Experiences</h3>
            <div className='grid sm:grid-cols-4 mt-5'>
                <div className='col-span-3 sm:grid sm:grid-cols-3 sm:gap-10 mb-10'>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Wheelchair mechanic</h5>
                        <p className={resumePStyling}>Raamsdonkveer, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Initially tasked with nationwide wheelchair deliveries and retrievals, my role quickly expanded to include wheelchair customization. Based in Raamsdonkveer for most of 2022, I customized wheelchairs to meet clients' needs, requiring a deep understanding of wheelchair models and components. As the primary mechanic, I also supervised freelancers, managed administrative tasks, and trained colleagues for continuity.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Production worker</h5>
                        <p className={resumePStyling}>Helmond, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>In 2021, I worked at Lightyear in Helmond, an ambitious company focused on designing solar panel-powered cars. My role involved assisting the solar team in producing solar panels for testing. This included tasks such as aligning parts, preparing panels for heating in a vacuum oven, and soldering wires for connections.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Bicycle messenger</h5>
                        <p className={resumePStyling}>Breda, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Being self-employed, I launched my venture back in 2013 with nothing more than a simple bicycle powered by my own legs. From delivering municipal documents to parcels, I traversed neighborhoods, making deliveries to doorsteps. Over time, I upgraded to electric cargo bikes, enhancing my efficiency. This served as my primary source of income for years, funding the majority of my travels. Currently, I still work occasionally, every now and then.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Construction worker</h5>
                        <p className={resumePStyling}>Wellington, New Zealand</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>At the end of 2019, I spent some time residing in Wellington, where I worked as a construction worker. My responsibilities included handling heavy loads of steel, maneuvering wheelbarrows filled with concrete across the site, and utilizing a variety of tools to complete various tasks assigned to me.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Landscaper</h5>
                        <p className={resumePStyling}>Melbourne, Australia</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Between 2019 and 2020 I was employed as a landscaper in Melbourne. My responsibilities included preparing numerous cement mixes, grinding stones for pathways, maneuvering wheelbarrows filled with cement or sand, extensive digging with shovels, and planting trees.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Mover</h5>
                        <p className={resumePStyling}>Perth, Australia</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>During late 2015, I worked as a mover in Perth. My responsibilities included visiting clients' homes throughout the city for several months, where I either loaded their belongings onto trucks or unloaded and placed them in their new residences. The job demanded long hours, typically lasting 12 hours a day, and exposed me to the intense summer heat, often reaching 40 degrees Celsius.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Volunteer</h5>
                        <p className={resumePStyling}>Breda, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>From 2010 until present I have been helping Breda Barst with a variety of functions. From setting up and tearing down the festival, stagemanaging and booking artists to building decorations.</p>
                        <p>From 2014 to 2017, I served as a bartender at Belcrum Beach in Breda.</p>
                        <p>Between 2012 and 2019, I was part of the team at Mezz in Breda. Starting from the wardrobe, I gradually transitioned to roles behind the cash register, ticket checking, and eventually became primarily a bartender.</p>
                        <p>In the years 2011, 2012, and 2016, I contributed to setting up and tearing down Boogiedown festival.</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Salesman</h5>
                        <p className={resumePStyling}>Prinsenbeek, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Between 2008 and 2011, I was employed at a video rental store that also specialized in computer sales. During this time, from the ages of 17 to 20, I held the responsibility of opening and closing the store independently. My duties included assisting customers, addressing complaints, and conducting sales transactions.</p>
                    </div>
                    <div className={mBottomStyling}><h3>EDUCATION</h3></div>
                    <div></div>
                    <div></div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Codecademy</h5>
                        <p className={resumePStyling}>codecademy.com</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Full-stack Engineer</p>
                        <p>August 2023 - January 2024</p>
                    </div>
                    <div className={resumeNameStyling}>
                        <h5 className={h5Styling}>Florijn college</h5>
                        <p className={resumePStyling}>Breda, The Netherlands</p>
                    </div>
                    <div className={resumeDescriptionStyling}>
                        <p>Retailmanagement</p>
                        <p>2008 - 2011</p>
                    </div>
                </div>
                <div className='col-span-1 sm:ml-10'>
                    <div className={mBottomStyling}>
                        <h4 className={h4Styling}>TRAITS</h4>
                        <ul className={ulStyling}>
                            <li>Communicative</li>
                            <li>Friendly</li>
                            <li>Specific</li>
                            <li>Independent</li>
                            <li>Problemsolver</li>
                            <li>Adventurous</li>
                            <li>Honest</li>
                        </ul>
                    </div>
                    <div className={mBottomStyling}>
                        <h4 className={h4Styling}>LANGUAGES</h4>
                        <ul className={ulStyling}>
                            <li>Dutch: mother tongue</li>
                            <li>English: fluent</li>
                        </ul>
                    </div>
                    <div className={mBottomStyling}>
                        <h4 className={h4Styling}>HOBBIES</h4>
                        <ul className={ulStyling}>
                            <li>Gaming</li>
                            <li>Movies</li>
                            <li>Books</li>
                            <li>Travelling</li>
                            <li>Hitchhiking</li>
                            <li>Festivals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
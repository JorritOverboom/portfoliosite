
import React, { useEffect, useState } from 'react';
import TravelBox from './TravelBox';
import { travelStories } from './travelStories' 

const Travel = () => {

    // Scroll to the top of the page upon landing on the page
    useEffect(() => {
        const element = document.getElementById('travel');
        if (element && window.innerWidth > 480) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);    

    // React hooks
    const [visibility, setVisibility] = useState({});

    // Toggle the visibility of the box when clicking on 'read more'
    const toggleVisibility = (index) => {
        setVisibility((prevState) => ({
            ...prevState, [index]: !visibility[index]
        }));
    };

    return  (
        <div className='travel' id='travel'>
            <h2>A timeline of my travels 2013 &mdash; 2023</h2>
            <div className='travel-list'>
                { travelStories.map((story, index) => (
                    <TravelBox 
                        key={index}
                        year={story.year}
                        countries={story.countries}
                        title={story.title}
                        introPhoto={story.introPhoto}
                        story={story.story}
                        isVisible={visibility[index]}
                        toggleVisible={() => toggleVisibility(index)}
                        photos={story.photos}
                        listLength={travelStories.length}
                        storyIndex={index}
                    />
                )) }

            </div>
        </div>
    )
};

export default Travel;
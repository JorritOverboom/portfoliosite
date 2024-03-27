
import './Travel.css';
import TravelBox from './TravelBox';
import { travelStories } from './travelStories' 
import { useState } from 'react';

const Travel = () => {

    const [visibility, setVisibility] = useState({});

    const toggleVisibility = (index) => {
        setVisibility((prevState) => ({
            ...prevState, [index]: !visibility[index]
        }));
    };

    return  (
        <div className='travel'>
            <h3 className='travel-header'>A timeline of my travels 2013 - 2023</h3>
            <div className='travel-list'>
                { travelStories.map((story, index) => (
                    <TravelBox 
                        key={index}
                        year={story.year}
                        title={story.title}
                        introPhoto={story.introPhoto}
                        story={story.story}
                        isVisible={visibility[index]}
                        toggleVisible={() => toggleVisibility(index)}
                        photos={story.photos}
                    />
                )) }

            </div>
        </div>
    )
};

export default Travel;
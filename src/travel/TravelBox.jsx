
import React, { useState, useRef, useEffect } from 'react';
import './TravelBox.css';
import arrow from './arrow.svg';

const flagComponents = {
    BE: React.lazy(() => import('country-flag-icons/react/3x2/BE')),
    DE: React.lazy(() => import('country-flag-icons/react/3x2/DE')),
    FR: React.lazy(() => import('country-flag-icons/react/3x2/FR')),
    ES: React.lazy(() => import('country-flag-icons/react/3x2/ES')),
    PT: React.lazy(() => import('country-flag-icons/react/3x2/PT')),
    AU: React.lazy(() => import('country-flag-icons/react/3x2/AU')),
    PT: React.lazy(() => import('country-flag-icons/react/3x2/PT')),
    NZ: React.lazy(() => import('country-flag-icons/react/3x2/NZ')),
    SG: React.lazy(() => import('country-flag-icons/react/3x2/SG')),
    TH: React.lazy(() => import('country-flag-icons/react/3x2/TH')),
    PL: React.lazy(() => import('country-flag-icons/react/3x2/PL')),
    HU: React.lazy(() => import('country-flag-icons/react/3x2/HU')),
    HR: React.lazy(() => import('country-flag-icons/react/3x2/HR')),
    ME: React.lazy(() => import('country-flag-icons/react/3x2/ME')),
    AL: React.lazy(() => import('country-flag-icons/react/3x2/AL')),
    GR: React.lazy(() => import('country-flag-icons/react/3x2/GR')),
    TR: React.lazy(() => import('country-flag-icons/react/3x2/TR')),
    BG: React.lazy(() => import('country-flag-icons/react/3x2/BG')),
    RS: React.lazy(() => import('country-flag-icons/react/3x2/RS')),
    MY: React.lazy(() => import('country-flag-icons/react/3x2/MY')),
    MM: React.lazy(() => import('country-flag-icons/react/3x2/MM')),
    KH: React.lazy(() => import('country-flag-icons/react/3x2/KH')),
    JP: React.lazy(() => import('country-flag-icons/react/3x2/JP')),
    IT: React.lazy(() => import('country-flag-icons/react/3x2/IT')),
    SI: React.lazy(() => import('country-flag-icons/react/3x2/SI')),
    RO: React.lazy(() => import('country-flag-icons/react/3x2/RO')),
    HK: React.lazy(() => import('country-flag-icons/react/3x2/HK')),
    CN: React.lazy(() => import('country-flag-icons/react/3x2/CN')),
    VN: React.lazy(() => import('country-flag-icons/react/3x2/VN')),
    LA: React.lazy(() => import('country-flag-icons/react/3x2/LA')),
    NL: React.lazy(() => import('country-flag-icons/react/3x2/NL')),
    AT: React.lazy(() => import('country-flag-icons/react/3x2/AT')),
    SK: React.lazy(() => import('country-flag-icons/react/3x2/SK')),
    US: React.lazy(() => import('country-flag-icons/react/3x2/US')),
    ID: React.lazy(() => import('country-flag-icons/react/3x2/ID')),
};

const TravelBox = (props) => {

    const [currentPhoto, setCurrentPhoto] = useState(0);
    const boxRef = useRef(null);
    const photoRef = useRef(null);

    useEffect(() => {
        if (props.isVisible || !props.isVisible && boxRef.current) {
            boxRef.current.scrollIntoView({ behavior: 'instant' });
        }
    }, [props.isVisible]);

    useEffect(() => {
        if (photoRef.current) {
            photoRef.current.scrollIntoView({ behavior: 'instant', block: 'center'});
        }
    }, [currentPhoto]);

    const nextPhoto = () => {
        setCurrentPhoto((currentPhoto + 1) % props.photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((currentPhoto - 1 + props.photos.length) % props.photos.length);
    };

    const isLastStory = props.storyIndex === props.listLength - 1;
    
    return (
        <div className='travel-box' id={`year-${props.year}`} ref={boxRef}>
            <div className='travel-year-introduction'>
                <div className='travel-year-intro-info'>
                    <div className='travel-year'><p>{props.year}</p></div>
                    <div className='travel-title'><h4>{props.title}</h4></div>
                    <div className='travel-countries'>
                        {props.countries.map((country, index) => {
                            const FlagComponent = flagComponents[country.countryCode];
                            return (
                                <div key={index} className='country-container'>
                                    {FlagComponent && <FlagComponent className='flag' />}
                                    <p>{country.name}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className='travel-year-intro-photo'>
                        <img src={props.introPhoto} />
                    </div>
                    <div className='travel-extend-box' style={{ visibility: !isLastStory ? 'block' : 'hidden' }}>
                        <div onClick={() => props.toggleVisible(props.index)}>
                            {props.isVisible ? 'READ LESS ▲' : 'READ MORE ▼'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='year-story' style={{ display: isLastStory || props.isVisible ? 'block' : 'none' }}>
                {props.story.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </div>
            <div className='year-photos' ref={photoRef} style={{ display: props.isVisible && props.photos.length > 0 ? 'flex' : 'none' }}>
                {props.photos.length > 0 && (
                    <div className='travel-photo'>
                        <img src={arrow} className='differentPhoto previousPhoto' style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={prevPhoto}></img>
                        <div className='photo-section'>
                            <div className='travel-photo-container'>
                                <img src={props.photos[currentPhoto].path} />
                            </div>
                            <p className='photo-description'>{props.photos[currentPhoto].description}</p>
                            <p style={{ display: props.photos.length > 1 ? 'block' : 'none' }}>{currentPhoto + 1} / {props.photos.length}</p>
                        </div>
                        <img src={arrow} className='differentPhoto nextPhoto' style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={nextPhoto}></img>
                    </div>
                )}
            </div>        
        </div>
    )
}

export default TravelBox;
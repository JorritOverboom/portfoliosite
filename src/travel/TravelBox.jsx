
import React, { useState, useRef, useEffect, Suspense } from 'react';
import './TravelBox.css';
import arrow from './arrow.svg';
import { useSelector } from 'react-redux';

// importing all the flags of the visited countries
const flagComponents = {
    BE: React.lazy(() => import('country-flag-icons/react/3x2/BE')),
    DE: React.lazy(() => import('country-flag-icons/react/3x2/DE')),
    FR: React.lazy(() => import('country-flag-icons/react/3x2/FR')),
    ES: React.lazy(() => import('country-flag-icons/react/3x2/ES')),
    PT: React.lazy(() => import('country-flag-icons/react/3x2/PT')),
    AU: React.lazy(() => import('country-flag-icons/react/3x2/AU')),
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

    // React hooks
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [enableScrollView, setEnableScrollView] = useState(false);
    const boxRef = useRef(null);
    const photoRef = useRef(null);
    const isDark = useSelector((state) => state.darkMode.darkMode);

    // Centering the screen on the year you are looking at when clicking on the 'read more' button
    useEffect(() => {
        if (props.isVisible || (!props.isVisible && enableScrollView && boxRef.current)) {
            setEnableScrollView(true);
            boxRef.current.scrollIntoView({ behavior: 'instant' });
        }
    }, [props.isVisible, enableScrollView]);

    // Centering the screen on the travel photos when changing the photos
    useEffect(() => {
        if (photoRef.current) {
            photoRef.current.scrollIntoView({ behavior: 'instant', block: 'center'});
        }
    }, [currentPhoto]);

    // Changing the photos
    const nextPhoto = () => {
        setCurrentPhoto((currentPhoto + 1) % props.photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((currentPhoto - 1 + props.photos.length) % props.photos.length);
    };

    // Checking if it is the last story
    const isLastStory = props.storyIndex === props.listLength - 1;
    
    return (
        <div className={`travel-box border-t ${isDark ? `border-white` : `border-black`}`} id={`year-${props.year}`} ref={boxRef}>
            <div className='travel-year-introduction my-8'>
                <div className='travel-year-intro-info grid grid-cols-2'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <div className='travel-year'><p className='text-customBlue text-2xl font-bold'>{props.year}</p></div>
                        <div className='travel-title text-3xl'><h4>{props.title}</h4></div>
                        <div className='travel-countries flex flex-wrap'>
                            {props.countries.map((country, index) => {
                                const Flag = flagComponents[country.countryCode];
                                return (
                                    <div key={index} className={`country-container flex mr-5 mb-2 rounded px-2 ${isDark ? `bg-gray-400` : `bg-gray-200`}`}>
                                        {Flag && <Flag className="flag w-5 mr-1" />}
                                        <p>{country.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='travel-extend-box' style={{ visibility: !isLastStory ? 'block' : 'hidden' }}>
                            <div className={`read-more-less ${isDark ? `border-white` : `border-black`} border-2 w-32 pl-3`} onClick={() => props.toggleVisible(props.index)}>
                                <span className='read-more-less-text'>{props.isVisible ? 'READ LESS' : 'READ MORE'}</span><span className='read-more-less-arrow'>{props.isVisible ? '▲' : '▼'}</span>
                            </div>
                        </div>
                    </div>
                    <div className='travel-year-intro-photo col-span-1'>
                        <img className='' src={props.introPhoto} alt='travel intro' />
                    </div>

                </div>
            </div>
            <div className={`year-story w-3/5 my-10`} style={{ display: isLastStory || props.isVisible ? 'block' : 'none' }}>
                {props.story.map((paragraph) => (
                    <p className='mb-4'>{paragraph}</p>
                ))}
            </div>
            <div className={`year-photos ${isDark ? `bg-black` : `bg-white`} mb-10 flex justify-center`} ref={photoRef} style={{ display: props.isVisible && props.photos.length > 0 ? 'flex' : 'none' }}>
                {props.photos.length > 0 && (
                    <div className='travel-photo flex'>
                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={prevPhoto} className={`${isDark ? `bg-black` : `bg-white`} w-20 mx-5`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                        <div className='photo-section flex flex-col items-center'>
                            <div className='travel-photo-container flex justify-center mb-5'>
                                <img className='w-5/6' src={props.photos[currentPhoto].path} alt='travel' />
                            </div>
                            <p className='photo-description mb-2'>{props.photos[currentPhoto].description}</p>
                            <p style={{ display: props.photos.length > 1 ? 'block' : 'none' }}>{currentPhoto + 1} / {props.photos.length}</p>
                        </div>
                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={nextPhoto} className={`${isDark ? `bg-black` : `bg-white`} w-20 mx-5`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </div>
                )}
            </div>        
        </div>
    )
}

// This function will prevent the page from showing an error when it is still importing the flags
const SuspenseFallback = () => (
    <div>Loading...</div>
);

const TravelBoxWithSuspense = (props) => (
    <Suspense fallback={<SuspenseFallback />}>
        <TravelBox {...props} />
    </Suspense>
);

export default TravelBoxWithSuspense;
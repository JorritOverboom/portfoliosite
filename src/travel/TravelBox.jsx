
import React, { useState, useRef, useEffect } from 'react';
import './TravelBox.css';

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
    
    return (
        <div className='travel-box' id={`year-${props.year}`} ref={boxRef}>
            <div className='travel-year-introduction'>
                <div className='travel-year-intro-info'>
                    <div className='travel-year'><p>{props.year}</p></div>
                    <div className='travel-title'><h4>{props.title}</h4></div>
                    <div className='travel-year-intro-photo'>
                        <img src={props.introPhoto} />
                    </div>
                    <div className='travel-extend-box'>
                        <div onClick={() => props.toggleVisible(props.index)}>
                            {props.isVisible ? 'READ LESS ▲' : 'READ MORE ▼'}
                        </div>
                    </div>    
                </div>
            </div>
            <div className='year-story' style={{ display: props.isVisible ? 'block' : 'none' }}>
                {props.story.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </div>
            <div className='year-photos' ref={photoRef} style={{ display: props.isVisible && props.photos.length > 0 ? 'flex' : 'none' }}>
                {props.photos.length > 0 && (
                    <div className='travel-photo'>
                        <img src='./arrow.png' className='differentPhoto previousPhoto' style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={prevPhoto}></img>
                        <div className='photo-section'>
                            <div className='travel-photo-container'>
                                <img src={props.photos[currentPhoto].path} />
                            </div>
                            <p>{props.photos[currentPhoto].description}</p>
                            <p style={{ display: props.photos.length > 1 ? 'block' : 'none' }}>{currentPhoto + 1} / {props.photos.length}</p>
                        </div>
                        <img src='./arrow.png' className='differentPhoto nextPhoto' style={{ display: props.photos.length === 1 ? 'none' : 'block' }} onClick={nextPhoto}></img>
                    </div>
                )}
            </div>        
        </div>
    )
}

export default TravelBox;
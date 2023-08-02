import React, { useState } from 'react';
import './Slideshow.css';

function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex > 5) {
                newIndex = 1;
            } else if (newIndex < 1) {
                newIndex = 5;
            }
            return newIndex;
        });
    };

    return (
        <div className="slideshow-container">
            <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                <div className="numbertext">1 / 5</div>
                <img src="/images/slides/astro.png" alt="Me as an astronaut" />
            </div>
            <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                <div className="numbertext">2 / 5</div>
                <img src="/images/slides/cyborg.png" alt="Me as a cyborg" />
            </div>
            <div className="mySlides fade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
                <div className="numbertext">3 / 5</div>
                <img src="/images/slides/pirate.png" alt="Me as a pirate" />
            </div>
            <div className="mySlides fade" style={{ display: slideIndex === 4 ? 'block' : 'none' }}>
                <div className="numbertext">4 / 5</div>
                <img src="/images/slides/knight.png" alt="Me as a knight" />
            </div>
            <div className="mySlides fade" style={{ display: slideIndex === 5 ? 'block' : 'none' }}>
                <div className="numbertext">5 / 5</div>
                <img src="/images/slides/wizard.png" alt="Me as a wizard" />
            </div>

            <button className="prev" onClick={() => showSlides(-1)}>&#10094;</button>
            <button className="next" onClick={() => showSlides(1)}>&#10095;</button>
        </div>
    );
}

export default Slideshow;

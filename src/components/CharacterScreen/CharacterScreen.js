import "./CharacterScreen.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"; // Or other icons

function CharacterScreen({ isMobile }) {
  const images = [
    "./cyborg.png",
    "./wizard.png",
    "./astro.png",
    "./pirate.png",
    "./knight.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="character-boss">
      {!isMobile ? (
        <div className="main-gallery">
          <div className="image-container">
            <img
              src="./cyborg.png"
              alt="Jordon as a cyborg"
              className="box box-1"
            />
            <img
              src="./wizard.png"
              alt="Jordon as a cartoon wizard"
              className="box box-2"
            />
            <img
              src="./astro.png"
              alt="Jordon as a cartoon astronaught"
              className="box box-3"
            />
            <img
              src="./pirate.png"
              alt="Jordon as a cartoon pirate"
              className="box box-4"
            />
            <img
              src="./knight.png"
              alt="Jordon as a knight"
              className="box box-5"
            />
          </div>
        </div>
      ) : (
        <div className="mobile-characters">
          <button className="left-carousel" onClick={prevImage}>
            <FontAwesomeIcon className="fa-angle" icon={faAngleLeft} />
          </button>
          <img
            src={images[currentIndex]}
            alt="Image Carousel"
            className="test"
          />
          <button className="right-carousel" onClick={nextImage}>
            <FontAwesomeIcon className="fa-angle" icon={faAngleRight} />
          </button>
        </div>
      )}
      <div className="stable-grad">
        <h1 className="stable-title">Stable Diffusion Image Generation</h1>
      </div>
      <p className="stable-text">
        AI generated images using a LoRa model trained on 10 images of myself.
        Training and generation run on a Google Compute Engine.
      </p>
    </div>
  );
}

export default CharacterScreen;

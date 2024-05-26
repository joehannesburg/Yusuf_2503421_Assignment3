import { useState } from "react";
import "./slider.css";

import img1 from '../../assets/slide1.png'
import img2 from '../../assets/slide2.png'
import img3 from '../../assets/slide3.png'
import img4 from '../../assets/slide4.png'
import img5 from '../../assets/slide5.png'
import img6 from '../../assets/slide6.png'





const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="slider">
      <nav>
        <button className="arrow arrow--left" onClick={goToPrevious} aria-label="Previous Slide">
          ❰
        </button>
        <button className="arrow arrow--right" onClick={goToNext} aria-label="Next Slide">
          ❱
        </button>
      </nav>
      <figure className="slide" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
        <figcaption>{slides[currentIndex].title}</figcaption>
      </figure>
      <nav className="dots-container" aria-label="Slide Navigation">
        {slides.map((slide, slideIndex) => (
          <span
          className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
          key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            aria-label={`Slide ${slideIndex + 1}`}
          >
            ●
          </span>
        ))}
      </nav>
    </section>
  );
};

const Slider = () => {
  const slides = [
    { url: img1, title: "Gulfstream 650" },
    { url: img2, title: "Dash 8" },
    { url: img3, title: "Airbus A350" },
    { url: img4, title: "Boeing 777" },
    { url: img5, title: "Airbus A380" },
    { url: img6, title: "Boeing 747" },
  ];

  return (
    <main className="cont">
      <h1>Go through a short gallery of some of aviations finest commercial aircraft</h1>
      <div className="container2">
        <ImageSlider slides={slides} />
      </div>
    </main>
  );
};

export default Slider;

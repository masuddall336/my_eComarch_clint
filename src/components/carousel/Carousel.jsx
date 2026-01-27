import { useEffect, useState, useRef } from "react";
import "./Carousel.css";

export default function Carousel() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  // Fetch data
  useEffect(() => {
    fetch("../../../public/api.json")
      .then(res => res.json())
      .then(data => {
        const items = data.carousel_content;
        setSlides([...items, items[0]]); // clone first slide
      });
  }, []);

  // Auto slide
  useEffect(() => {
    if (!slides.length) return;

    intervalRef.current = setInterval(() => {
      goNext();
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [slides, index]);

  const goNext = () => {
    setIndex(prev => prev + 1);
  };

  const goPrev = () => {
    // still move right → left visually
    setIndex(prev => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  // Seamless reset
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 900);
    } else {
      setAnimate(true);
    }
  }, [index, slides.length]);

  const goToSlide = i => {
    setIndex(i);
  };

  if (!slides.length) return null;

  return (
    <div className="carousel">    
      <div
        className={`carousel-track ${animate ? "animate" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img className="" src={slide.img} alt={slide.title} />

            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.path} className="carousel-btn">
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={goPrev}>‹</button>
      <button className="arrow right" onClick={goNext}>›</button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.slice(0, -1).map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

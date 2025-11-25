import { useState, useEffect, useCallback } from "react";
import "./style.scss";

import sliderMobile from "@shared/assets/images/png/sliderMobile.png";
import sliderDesktop from "@shared/assets/images/png/Laptop.png";

import ArrowLeft from "@shared/assets/images/icons/ArrowLeft.svg?react";
import ArrowRight from "@shared/assets/images/icons/VectorRight.svg?react";
import Button from "@shared/ui/button";

interface Slide {
  title: string;
  description: string;
  buttonLabel: string;
  src: string;
}

const inMemorySlides: Slide[] = [
  {
    title: "The new phones are here — take a look.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor.",
    buttonLabel: "Shop Now",
    src: sliderMobile,
  },
  {
    title: "Fast. Modern. Powerful.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis feugiat nibh euismod aliquam.",
    buttonLabel: "Learn More",
    src: sliderDesktop,
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((i) => (i + 1) % inMemorySlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? inMemorySlides.length - 1 : i - 1));
  }, []);

  useEffect(() => {
    if (inMemorySlides.length <= 1) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!inMemorySlides.length) return null;

  const current = inMemorySlides[activeIndex];

  return (
    <section className="slider">
      <div className="slider-dots">
        {inMemorySlides.map((_, idx) => (
          <span
            key={idx}
            className={activeIndex === idx ? "dot active" : "dot"}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      <div className="slider-container">
        <span className="slider-arrow left" onClick={prevSlide}>
          <ArrowLeft />
        </span>

        <div className="slider-content">
          <div className="content-info">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
          </div>

          <Button>{current.buttonLabel}</Button>
        </div>

        <img src={current.src} alt={`Slide ${activeIndex + 1}`} />

        <button className="slider-arrow right" onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;

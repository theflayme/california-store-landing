import { useState, useEffect, useCallback } from "react";
import "./style.scss";

import sliderMobile from "@shared/assets/images/png/sliderMobile.png";
import sliderDesktop from "@shared/assets/images/png/Laptop.png";

interface Slide {
  title: string;
  description: string;
  buttonLabel: string;
  src: string;
}

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#000"
    strokeWidth={1.5}
    className="arrow-icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

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
        {/* ◀️ Левая кнопка */}
        <span className="slider-arrow left" onClick={prevSlide}>
          <ArrowLeft />
        </span>

        <div className="slider-content">
          <div className="content-info">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
          </div>

          <button>{current.buttonLabel}</button>
        </div>

        <img src={current.src} alt={`Slide ${activeIndex + 1}`} />

        {/* ▶️ Правая кнопка */}
        <button className="slider-arrow right" onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;

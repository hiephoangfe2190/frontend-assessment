import { useState, useEffect, useRef } from "react";
import "./hero-banner.scss";

import heroDesktop from "../../../assets/hero/hero-banner-desktop.png";
import heroMobile from "../../../assets/hero/hero-banner-mobile.jpg";

import arrowLeftDesktop from "../../../assets/icons/arrow-left-desktop.png";
import arrowRightDesktop from "../../../assets/icons/arrow-right-desktop.png";

import arrowLeftMobile from "../../../assets/icons/arrow-left-mobile.png";
import arrowRightMobile from "../../../assets/icons/arrow-right-mobile.png";

const slides = [
  { id: 1, desktop: heroDesktop, mobile: heroMobile },
  { id: 2, desktop: heroDesktop, mobile: heroMobile },
  { id: 3, desktop: heroDesktop, mobile: heroMobile },
  { id: 4, desktop: heroDesktop, mobile: heroMobile },
  { id: 5, desktop: heroDesktop, mobile: heroMobile }
];

const AUTO_SLIDE_INTERVAL = 4000;

const HeroBanner = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const goNext = () => {
    setActiveSlideIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setActiveSlideIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setActiveSlideIndex(index);
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, AUTO_SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {

    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) goNext();
    if (diff < -50) goPrev();

    touchStartX.current = null;

  };

  return (
    <section className="hero-banner">

      <div
        className="hero-banner__slider relative w-full overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* LEFT ARROW */}

        <button
          className="hero-banner__arrow hero-banner__arrow--left"
          onClick={goPrev}
          onTouchStart={(e) => e.stopPropagation()}
        >

          <picture>

            <source
              media="(max-width:768px)"
              srcSet={arrowLeftMobile}
            />

            <img
              src={arrowLeftDesktop}
              alt="Previous slide"
            />

          </picture>

        </button>

        <div
          className="hero-banner__track flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
        >

          {slides.map(slide => (

            <picture key={slide.id} className="hero-banner__slide min-w-full">

              <source
                media="(max-width:768px)"
                srcSet={slide.mobile}
              />

              <img
                src={slide.desktop}
                alt="Hero banner"
                className="hero-banner__image"
              />

            </picture>

          ))}

        </div>

        {/* RIGHT ARROW */}

        <button
          className="hero-banner__arrow hero-banner__arrow--right"
          onClick={goNext}
          onTouchStart={(e) => e.stopPropagation()}
        >

          <picture>

            <source
              media="(max-width:768px)"
              srcSet={arrowRightMobile}
            />

            <img
              src={arrowRightDesktop}
              alt="Next slide"
            />

          </picture>

        </button>

        {/* CONTENT */}

        <div className="hero-banner__content">

          <span className="hero-banner__eyebrow">
            Eyebrow
          </span>

          <h1 className="hero-banner__title">
            Welcome Developer!
          </h1>

          <p className="hero-banner__description">
            Your goal is to translate the provided Figma designs into a living,
            functional interface. We value pixel-perfection; your output should
            match the design specifications exactly in terms of colour,
            spacing, typography, and visual hierarchy.
          </p>

          <div className="hero-banner__actions flex gap-2 mt-4">

            <a href="#" className="hero-banner__button">
              Shop Now
            </a>

            <a href="#" className="hero-banner__button">
              Discover All
            </a>

          </div>

          {/* DOTS */}

          <div className="hero-banner__dots flex justify-center gap-3">

            {slides.map((slide, index) => {

              const isActive = index === activeSlideIndex;

              return (
                <button
                  key={slide.id}
                  className={`hero-banner__dot ${
                    isActive ? "hero-banner__dot--active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;
import { useEffect, useRef, useState } from "react";
import "./tabs-desktop.scss";

const TabsDesktop = ({ sections, activeIndex, setActiveIndex }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const tabButtonRefs = useRef([]);

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  const updateIndicatorPosition = () => {
    const activeButton = tabButtonRefs.current[activeIndex];

    if (!activeButton) return;

    setIndicatorStyle({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
    });
  };

  useEffect(() => {
    updateIndicatorPosition();

    window.addEventListener("resize", updateIndicatorPosition);

    return () =>
      window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeIndex]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="tabs-desktop max-w-[1000px] mx-auto my-[60px] px-5">
      <div className="tabs-desktop__navigation relative flex border-b-2 border-gray-200">
        {sections.map((section, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={section.title}
              ref={(element) => (tabButtonRefs.current[index] = element)}
              className={`tabs-desktop__button flex-1 py-4 text-base font-medium transition-colors duration-300 hover:text-black ${
                isActive ? "tabs-desktop__button--active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {section.title}
            </button>
          );
        })}

        <span
          className="tabs-desktop__indicator"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>

      <div
        className={`tabs-desktop__content py-10 leading-[1.7] ${
          isAnimating
            ? "tabs-desktop__content--fade-out"
            : "tabs-desktop__content--fade-in"
        }`}
        dangerouslySetInnerHTML={{
          __html: sections[activeIndex].content,
        }}
      />
    </div>
  );
};

export default TabsDesktop;
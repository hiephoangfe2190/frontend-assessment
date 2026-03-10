import { useEffect, useRef } from "react";
import "./accordion-mobile.scss";

const AccordionMobile = ({ sections, activeIndex, setActiveIndex }) => {
  const contentWrapperRefs = useRef([]);

  const expandSection = (index) => {
    const element = contentWrapperRefs.current[index];

    if (!element) return;

    const height = element.scrollHeight;

    element.style.height = height + "px";

    setTimeout(() => {
      element.style.height = "auto";
    }, 300);
  };

  const collapseSection = (index) => {
    const element = contentWrapperRefs.current[index];

    if (!element) return;

    element.style.height = element.scrollHeight + "px";

    requestAnimationFrame(() => {
      element.style.height = "0px";
    });
  };

  const handleToggle = (index) => {
    const isSameSection = activeIndex === index;

    if (isSameSection) {
      collapseSection(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        collapseSection(activeIndex);
      }

      setActiveIndex(index);

      setTimeout(() => expandSection(index), 0);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      expandSection(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="accordion-mobile pt-[70px] flex flex-col gap-4 px-5">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="accordion-mobile__item border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            className="accordion-mobile__header w-full text-left px-5 py-4 font-semibold bg-gray-50"
            onClick={() => handleToggle(index)}
          >
            {section.title}
          </button>

          <div
            className="accordion-mobile__content-wrapper"
            ref={(element) => (contentWrapperRefs.current[index] = element)}
          >
            <div
              className="accordion-mobile__content px-5 py-4 leading-[1.6]"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMobile;
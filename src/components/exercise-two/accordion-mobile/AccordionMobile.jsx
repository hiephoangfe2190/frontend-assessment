import "./accordion-mobile.scss";

const AccordionMobile = ({ sections, activeIndex, setActiveIndex }) => {
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-mobile pt-[70px] flex flex-col gap-4 px-5">
      {sections.map((section, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={`${section.title}-${index}`}
            className="accordion-mobile__item border border-gray-200 rounded-lg bg-white overflow-hidden"
          >
            <button
              className="accordion-mobile__header w-full text-left px-5 py-4 font-semibold bg-gray-50"
              onClick={() => handleToggle(index)}
            >
              {section.title}
            </button>

            <div
              className={`accordion-mobile__content ${
                isOpen ? "accordion-mobile__content--open" : ""
              }`}
            >
              <div
                className="accordion-mobile__inner px-5 py-4 leading-[1.6]"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionMobile;
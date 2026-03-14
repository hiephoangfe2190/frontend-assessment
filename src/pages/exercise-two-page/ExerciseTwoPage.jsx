import { useState, useEffect } from "react";
import TabsDesktop from "../../components/exercise-two/tabs-desktop/TabsDesktop";
import AccordionMobile from "../../components/exercise-two/accordion-mobile/AccordionMobile";
import sectionsData from "../../data/data.json";
import useResponsiveView from "../../hooks/useResponsiveView";
import BackButton from "../../components/common/back-button/BackButton";

const ExerciseTwoPage = () => {
  const { isDesktop } = useResponsiveView(768);

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (isDesktop && activeIndex === null) {
      setActiveIndex(0);
    }
  }, [isDesktop]);
  
  
  return (
    <div className="pt-5">
      <BackButton />

      {isDesktop ? (
        <TabsDesktop
          sections={sectionsData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <AccordionMobile
          sections={sectionsData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
};

export default ExerciseTwoPage;
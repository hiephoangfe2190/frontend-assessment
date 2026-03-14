import { useEffect, useState } from "react";

const useResponsiveView = (breakpoint = 768) => {
  const getIsDesktop = () => window.innerWidth > breakpoint;

  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(getIsDesktop());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return { isDesktop };
};

export default useResponsiveView;
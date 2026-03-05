import { useEffect, useState } from "react";

const useResponsiveView = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth > breakpoint;
      setIsDesktop(isDesktopView);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return { isDesktop };
};

export default useResponsiveView;
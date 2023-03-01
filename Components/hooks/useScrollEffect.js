import React, { useState, useEffect } from "react";

export const useScrollEffect = () => {
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollValue(window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return scrollValue;
};

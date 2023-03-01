import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import {
  motion,
  useTransform,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { useScrollEffect } from "../../hooks/useScrollEffect";

const photos = [
  "/images/banner/mini-radzyn_zielona_gora61.jpeg",
  "/images/banner/mini-radzyn_zielona_gora125.jpeg",
  "/images/banner/mini-radzyn_zielona_gora199.jpeg",
  "/images/banner/radzyn_gloska_2010_sezon33.jpeg",
];

const Slider = () => {
  const scrollValue = useScrollEffect();
  const { scrollY } = useScroll();
  const scaleY = useTransform(scrollY, [0, 600], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((nextIndex) =>
        nextIndex === photos.length - 1 ? 0 : nextIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 500);

    return () => clearTimeout(timeout);
  }, [nextIndex]);

  return (
    <>
      <div className={styles.sliderContainer}>
        {photos.map((photo, index) => (
          <AnimatePresence key={index}>
            <motion.div
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <img
                className={styles.imagee}
                src={photo}
                alt={`Photo ${index + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        ))}
        {scrollValue > 545 ? (
          ""
        ) : (
          <div className={styles.logo222}>
            <motion.div style={{ scale: scaleY }}>
              <div className={styles.linear}>
                <div className={styles.linear2}>L </div>
                <div className={styles.linear2}>
                  <div className={styles.logo}>
                    <img
                      className={styles.frame}
                      src="/images/header/LOZTS1.png"
                      alt="Logo1"
                      priority="true"
                    />
                    <img
                      className={styles.frame2}
                      width={50}
                      height={50}
                      src="/images/header/LOZTS2.png"
                      alt="Logo2"
                      priority="true"
                    />
                  </div>
                </div>
                <div className={styles.linear2}>Z</div>
                <div className={styles.linear2}>T</div>
                <div className={styles.linear2}>S</div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Slider;

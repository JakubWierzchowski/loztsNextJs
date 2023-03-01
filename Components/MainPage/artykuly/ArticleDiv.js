import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "./ArticleStyled";
import { useInView } from "react-intersection-observer";
import styled from "./ArticleList.module.scss";
function ArticleDiv({ item, index, user }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      key={item.Title}
      className={styled.wrapper}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, easy: [0.6, 0.05, 0.01, 0.9] },
        },
        hidden: { opacity: 0, x: index % 2 === 0 ? 150 : -150 },
      }}
    >
      <>
        <div className={styled.gridBox}>
          <div
            className={index % 2 === 0 ? styled.wrapperIMG : styled.wrapperIMG2}
          >
            <div>
              <img src={item.img || logo} alt="" className={styled.image} />
            </div>
          </div>
          <div className={styled.textStyle}>
            <motion.h3
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                    easy: [0.6, 0.05, 0.01, 0.9],
                  },
                },
                hidden: { opacity: 0, y: -50 },
              }}
            >
              <b>{item.Title}</b>
            </motion.h3>
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.6,
                    easy: [0.6, 0.05, 0.01, 0.9],
                  },
                },
                hidden: { opacity: 0, y: -50 },
              }}
            >
              {item.Tekst}{" "}
            </motion.p>
            <motion.p
              className={styled.signature}
              ref={ref}
              animate={controls}
              initial="hidden"
              //   transition={{ duration: 1 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.7,
                    easy: [0.6, 0.05, 0.01, 0.9],
                  },
                },
                hidden: { opacity: 0, y: -50 },
              }}
            >
              <b>{item.Signature} </b>
            </motion.p>
          </div>
        </div>
      </>

      <div key={index}>
        {user?.email === "lozts1937@gmail.com" ? (
          <Button delete onClick={() => handleDelete(item.id)}>
            Usuń artykuł
          </Button>
        ) : null}
      </div>
    </motion.div>
  );
}

export default ArticleDiv;

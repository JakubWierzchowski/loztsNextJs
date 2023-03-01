import React, { useState, useRef, useEffect } from "react";
import styles from "../../Components/Galeria/galeriaTurniej.module.css";
import Image from "next/image";
import useModal from "../../Components/hooks/useModal";
import GaleriaModal from "../../Components/Galeria/GaleriaModal";

import styless from "../../Components/Galeria/galeriaunsplash.module.scss";

function GaleriaID({ date }) {
  const flatingDate = date.flat();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [slideNumber, setSlideNumber] = useState(0);

  const viewImage = (i) => {
    setSlideNumber(i);
    handleOpenModal();
  };
  const imgMapping = flatingDate.map((item) => item.link[slideNumber]?.img);
  const slider = flatingDate.map((item) => item.link.length);

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(slider[0])
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber === slider[0]
      ? setSlideNumber(slider[0])
      : setSlideNumber(slideNumber + 1);
  };

  console.log(slider[0]);
  // console.log(slideNumber);

  const lastSlide = flatingDate.map((item) => item.link.length);
  return (
    <>
      <h1 className={styles.h1Style}>
        {flatingDate.map((item) => item?.text)}
      </h1>
      {/* </div> */}

      <div className={styless.gallery}>
        {/* <div className={styless.galleryGroup}> */}
        {flatingDate ? (
          <>
            {flatingDate.map((item) =>
              item.link.map((image, i) => (
                <div className={styless.galleryItem} key={i}>
                  <div className={styless.image}>
                    <img
                      // className={styles.galleryImg}
                      src={image.img}
                      key={i}
                      alt=""
                      // width={image.width}
                      // height={image.height}
                      onClick={() => viewImage(i)}
                    />
                  </div>
                </div>
              ))
            )}

            <GaleriaModal
              isOpen={isOpen}
              handleCloseModal={handleCloseModal}
              ariaHideApp={false}
              images={imgMapping[0]}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              lastSlide={lastSlide}
              slideNumber={slideNumber}
            />
          </>
        ) : (
          <p>Sorry we couldnt find any data</p>
        )}
      </div>
    </>
  );
}

export default GaleriaID;

export async function getStaticPaths() {
  const { allData } = await import("../../data/galeria.json");
  const allPaths = allData
    .map((item) =>
      item.data.map((item2, index) => ({
        params: { galeriaid: item2.ID.toString() },
      }))
    )
    .flat();
  return {
    paths: allPaths,
    // paths: [...allPaths],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.galeriaid;
  const { allData } = await import("../../data/galeria.json");
  const filteredData = allData.map((item) =>
    item.data.filter((e) => e.ID === id)
  );

  return {
    props: {
      date: filteredData,
    },
  };
}

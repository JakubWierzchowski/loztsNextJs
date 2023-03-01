import { Button } from "../Atoms/Buttons";
import { Wrapper } from "../AddPlayers/AddPlayerModal.style";
import Image from "next/image";
import styles from "./GaleriaModal.module.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ModalWrapper } from "./Modal.styled";
import { motion } from "framer-motion";
const Modal = ({
  images,
  handleCloseModal,
  isOpen,
  prevSlide,
  nextSlide,
  animation,
  lastSlide,
  slideNumber,
}) => {
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <Button close onClick={handleCloseModal} lassName={styles.close}>
          X
        </Button>
        <Wrapper>
          <motion.div>
            <Image
              className={styles.galleryImg}
              src={images}
              alt=""
              width={500}
              height={700}
            />
          </motion.div>

          {lastSlide - 1 === slideNumber ? (
            ""
          ) : (
            <motion.div className={styles.next} onClick={nextSlide}>
              <FiChevronRight />
            </motion.div>
          )}
          {slideNumber === 0 ? (
            ""
          ) : (
            <div className={styles.prev} onClick={prevSlide}>
              <FiChevronLeft />
            </div>
          )}
        </Wrapper>
      </ModalWrapper>
    </>
  );
};
export default Modal;

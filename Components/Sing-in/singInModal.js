import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { Button } from "../Atoms/Buttons";
import { useUserContext } from "../contex/userContext";
import Auth from "./auth";
import useModal from "../hooks/useModal";

const ModalWrapper = styled(ReactModal)`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 1px rgba(215, 215, 215, 0.13), 0 1px 3px rgb(0 0 0 / 20%);
`;

const Modal = ({ isOpen, handleClose }) => {
  return (
    <>
      <ModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
        {/* <Wrapper> */}
        <Auth />
        {/* </Wrapper> */}

        <Button delete onClick={handleClose}>
          Close Modal
        </Button>
      </ModalWrapper>
    </>
  );
};

export default Modal;

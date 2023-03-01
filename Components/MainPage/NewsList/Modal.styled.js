import styled from "styled-components";
import ReactModal from "react-modal";
export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
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
export const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 1px rgba(215, 215, 215, 0.13), 0 1px 3px rgb(0 0 0 / 20%);
`;

export const ModalButton = styled.button`
  color: white;
  display: flex;
  border: 0;
  margin: 10px auto;
  text-align: center;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  background-color: rgb(228, 39, 39);
`;

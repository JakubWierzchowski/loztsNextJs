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
export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
export const Select = styled.select`
  display: block;
  border: 1px solid;
  border-radius: 8px;
  padding: 10px 12px;
  margin: 0px 0 20px 0;
  font-size: 20px;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  font-size: 15px;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

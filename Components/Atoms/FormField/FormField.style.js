import styled from "styled-components";
export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Label} {
    margin: 10px 0;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: ${({ isTextarea }) => (isTextarea ? "300px" : "")};
  padding: 10px 12px;
  border: 1px solid;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextarea }) => (isTextarea ? "10px" : "15px")};
  font-size: 15px;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
  @media (max-width: 1123px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (max-width: 424px) {
    width: 90%;
  }
`;

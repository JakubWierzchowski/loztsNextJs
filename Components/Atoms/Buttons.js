import styled from "styled-components";
import css from "styled-jsx/css";

export const Button = styled.button`
  color: white;
  border: 0;
  padding: 7px 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? " #b5121255" : "#059316")};
  ${(props) =>
    props.delete &&
    css`
      background-color: #e42727;
    `}
  ${(props) =>
    props.download &&
    css`
      background-color: #059316;
    `}
      @media (max-width: 768px) {
    font-size: 14px;
  }
  ${(props) =>
    props.close &&
    css`
      position: absolute;
      top: 0;
      right: 0px;
      background-color: #e42727;
      margin: 10px 15px;
    `}
  @media (max-width: 424px) {
    font-size: 12px;
  }
`;

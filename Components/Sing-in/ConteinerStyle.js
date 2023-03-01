import styled from "styled-components";

export const Container = styled.div`
  min-height: 200px;
  box-shadow: 0 1px 6px #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 22px;
  margin: 0 auto;
`;

export const App = styled.div`
  min-height: 240px;
`;

export const Paragraph = styled.p`
  color: black;
  padding: 6px;
  border: none;
  margin: 6px 0;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

import styled, { keyframes } from "styled-components";
export const Wrapper = styled.div`
  padding: 10px;
  margin: 30px auto;
  height: fit-content;
  box-shadow: 0 0 1px rgba(215, 215, 215, 0.13), 0 1px 3px rgb(0 0 0 / 20%);
`;

export const showBox = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const showContent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2%);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
`;

export const StyledDetails = styled.details`
  margin: 30px 0;
  position: relative;
  :hover {
    background-color: #e9ebed78;
  }
  summary {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    list-style: none;
    cursor: pointer;
    font-weight: 400;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 424px) {
      font-size: 16px;
    }
  }

  summary::after {
    position: absolute;
    left: -50px;
    display: inline-block;
    content: ">";
    margin-left: 20px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(90deg);
  }
  summary:focus-visible {
    outline: 3px solid #f9e852;
  }
  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }

  // Firefox animation workaround
  &[open] div {
    display: block;
  }
  div {
    display: none;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.5s ease-in-out 1 forwards ${showBox};
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
    background-color: #e9ebed78;
    padding: 20px 40px 20px 20px;
    // border-left: 5px solid black;
    p {
      font-weight: 300;
      opacity: 0;
      animation: 0.3s 0.6s ease-in 1 forwards ${showContent};
      @media (max-width: 424px) {
        font-size: 12px;
      }
    }
    p:nth-child(2) {
      font-weight: 400;
    }
    a {
      color: black;
      cursor: pointer;
      text-decoration: none;
      font-weight: 300;
      @media (max-width: 424px) {
        font-size: 12px;
      }
    }
    a:hover {
      text-decoration: underline;
    }
    p:last-child {
      font-weight: 400;
      text-align: right;
    }

    img {
      opacity: 0;
      animation: 0.3s 0.6s ease-in 1 forwards ${showContent};
      max-width: 70%;
      margin-bottom: 20px;
      margin: 0 auto;
      text-align: center;
    }
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      summary::-webkit-details-marker {
        display: none;
      }

      summary:focus {
        outline: 3px solid #f9e852;
      }
    }
  }
`;

export const Button = styled.div`
  background-color: #f71735c0;
  color: rgb(0, 0, 0);
  padding: 12px;
  width: 150px;
  text-align: center;
  margin: 5px auto 30px auto;
  box-shadow: 0 1px 6px #ccc;
  border-radius: 6px;
  font-size: 18px;
`;

import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import styled from "styled-components";
import ForgotPassword from "./forgetpassword";
import { Container, Paragraph } from "./ConteinerStyle";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <>
      {!index ? <Signin /> : <ForgotPassword />}
      <div onClick={toggleIndex}>
        {!index ? (
          <Paragraph>Nie pamiętasz hasła?</Paragraph>
        ) : (
          <Paragraph>Masz już konto? Zaloguj się!</Paragraph>
        )}
      </div>
    </>
  );
};

export default Auth;

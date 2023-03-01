import React, { useRef, useState } from "react";
import { useUserContext } from "../contex/userContext";

import FormField from "../Atoms/FormField/FormField";
import { Button } from "../Atoms/Buttons";

import Auth from "./auth";
import { App } from "./ConteinerStyle";

// import "../contex/login.css";

const ForgotPassword = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email) signInUser(email);
  };
  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  const { user, logoutUser, loading } = useUserContext();
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <App className="App">
      <div className="form">
        <h2> Wpisz adress email </h2>
        <form onSubmit={onSubmit}>
          <FormField placeholder="Email" type="email" ref={emailRef} />
          <Button
            upload
            onClick={forgotPasswordHandler}
            ref={psdRef}
            value="submit"
          >
            Wyślij
          </Button>
          <div onClick={toggleIndex}>{!index ? "" : <Auth />}</div>
        </form>
      </div>
    </App>
  );
};

export default ForgotPassword;

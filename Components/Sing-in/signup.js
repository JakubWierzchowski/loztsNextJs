import React, { useRef, useState } from "react";
import { useUserContext } from "../contex/userContext";
import { Button } from "../Atoms/Buttons";
import FormField from "../Atoms/FormField/FormField";
import styled from "styled-components";

const ShowPassword = styled.div`
  background-color: #f0f3f5;
  color: black;
  padding: 12px;
  margin: 12px 0;
  box-shadow: 0 1px 6px #ccc;
  border-radius: 6px;
  font-size: 18px;
`;

const Signup = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setshowPassword] = useState(false);
  const [show, setShow] = useState(true);
  const toggleBtn = () => {
    setshowPassword((prevState) => !prevState);
    setShow((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    email && password !== confirmPassword
      ? alert("Hasła muszą być takie same!")
      : registerUser(email, password);
  };

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <FormField placeholder="Email" type="email" ref={emailRef} />
        <FormField
          placeholder="Password"
          ref={psdRef}
          type={showPassword ? "text" : "password"}
        />
        <FormField
          placeholder="Confirm Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ShowPassword onClick={toggleBtn}>
          {show ? "Pokaż hasło" : "Ukryj hasło"}
        </ShowPassword>

        <Button type="submit">Zarejstruj</Button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useRef } from "react";
import { useUserContext } from "../contex/userContext";
import { Button } from "../Atoms/Buttons";
import FormField from "../Atoms/FormField/FormField";
import Link from "next/link";
import styled from "styled-components";
import ForgotPassword from "./forgetpassword";
import { App } from "./ConteinerStyle";
import useModal from "../hooks/useModal";

const Linkk = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 12px;
  border: none;
  margin: 12px 0;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  text-align: center;
`;

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      signInUser(email, password) || handleOpenModal();
    }
  };

  return (
    <>
      <h2> Login </h2>
      <Form onSubmit={onSubmit}>
        <FormField
          placeholder="Email"
          type="email"
          ref={emailRef}
          label="Wpisz adres e-mail"
        />
        <FormField
          placeholder="Password"
          type="password"
          ref={psdRef}
          label="Wpisz hasło"
        />
        <Button type="submit">Zaloguj</Button>
      </Form>
    </>
  );
};

export default Signin;

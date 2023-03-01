import React from "react";
import Auth from "./auth";
import styled from "styled-components";
import { useUserContext } from "../../context/userContext";

const Div = styled.div`
  padding-top: 80px;
  margin: 0 auto;
`;
export default function Logowanie() {
  const { user } = useUserContext();

  return (
    <>
      {user ? (
        <>
          <h1>Zalogowano Pomyślnie</h1>
        </>
      ) : (
        <Div>
          <Auth />
        </Div>
      )}
    </>
  );
}

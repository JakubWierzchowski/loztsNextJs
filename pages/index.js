import React from "react";
import News from "../Components/MainPage/NewsList/NewsList";
import styles from "../Components/MainPage/Main.module.scss";
import CalendarMain from "../Components/MainPage/CalendarMain/CalendarMain";
import Articles from "../Components/MainPage/artykuly/index";
import Head from "next/head";

function Index({}) {
  return (
    <>
      <News />
      <CalendarMain />
      <Articles />
    </>
  );
}

export default Index;

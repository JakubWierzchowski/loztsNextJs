import "../styles/globals.css";

import Header from "../Components/Header/Header";
import { UserContextProvider } from "../Components/contex/userContext";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LOZTS</title>
        <meta
          name="LOZTS"
          content="Strona Lubelskiego Związku Tenisa Stołowego"
        />
        <link rel="icon" href="/images/header/logo.png" />
      </Head>
      <main>
        <UserContextProvider>
          <Header />
          <div className="main">
            <div className="mainBackground">
              <Component {...pageProps} />
            </div>
          </div>
        </UserContextProvider>
      </main>
    </>
  );
}

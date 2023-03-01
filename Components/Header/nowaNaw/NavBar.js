import Link from "next/link";
import { useState, useCallback } from "react";
import Image from "next/image";
import SignInModal from "../../Sing-in/singInModal";
import useModal from "../../hooks/useModal";
import { useUserContext } from "../../contex/userContext";
import { motion } from "framer-motion";
import { useScrollEffect } from "../../hooks/useScrollEffect";

const Navbar = ({ pagePhase }) => {
  const scrollValue = useScrollEffect();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleOpenModalMemo = handleOpenModal;
  const handleCloseModalMemo = handleCloseModal;
  const { user, logoutUser } = useUserContext();
  const [open, setOpen] = useState();
  const scrollPath = pagePhase === "/" ? 544 : 12;
  const scrolll = scrollValue < scrollPath ? "#f0f3f500" : "#ffffff";
  const colorFont =
    scrollValue < scrollPath ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

  return (
    <header className="header">
      <motion.nav
        style={{
          backgroundColor: pagePhase === "/" ? scrollValue : "#ffffff",
          color: pagePhase !== "/" ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0)",
        }}
        className="navbar"
        initial={{ opacity: 1, paddingTop: "50px" }}
        animate={{
          backgroundColor: scrolll,
          paddingTop: scrollValue < scrollPath ? "50px" : "20px",
        }}
        exist={{ opacity: 0, paddingTop: "20px" }}
      >
        <label
          htmlFor="input-hamburger"
          onClick={() => setOpen(!open)}
          className={` hamburger ${open ? "close" : ""}`}
        ></label>
        <input type="checkbox" id="input-hamburger" hidden></input>

        <ul className="menu">
          <div className="leftMenu">
            <div className="flexLeft">
              <li className="has-dropdown">
                <Link href="/komunikaty" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Komunikaty
                  </span>
                </Link>
              </li>

              <li className="has-dropdown">
                <Link href="#" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Informacje
                  </span>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/kontakt" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        Kontakt
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/naszesukcesy" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        {" "}
                        Nasze sukcesy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/wojewodzkiezwiazki" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        Wojewódzkie związki
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/kalendarz" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Kalendarz
                  </span>
                </Link>
              </li>
            </div>
          </div>
          <div className="centerMenu">
            <div className="flexCenter">
              <li className="has-dropdown">
                {pagePhase === "/" && scrollValue < 544 ? (
                  ""
                ) : (
                  <Link href="/" className="menu-link">
                    <div className="logo">
                      <div className="logoName">L</div>
                      <div className="divIMGlogo">
                        <Image
                          className="logoNameImage"
                          src="/images/header/LOZTS1.png"
                          alt="Logo1"
                          width={40}
                          height={39.8}
                        />
                      </div>
                      <div className="logoName">Z</div>
                      <div className="logoName">T</div>
                      <div className="logoName">S</div>
                    </div>
                  </Link>
                )}
              </li>
            </div>
          </div>
          <div className="rightMenu">
            <div className="flexRight">
              <li className="has-dropdown">
                <Link href="#" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Liga
                  </span>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/liga/liga2k" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        2 liga Kobiet
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/liga/liga2m" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        2 Liga mezczyzn
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/liga/liga3m" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        3 liga mezczyzn
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/liga/liga4m" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        4 liga mezczyzn
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="/galeria" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Galeria
                  </span>
                </Link>
              </li>
              <li className="has-dropdown">
                <Link href="/archiwum" className="menu-link">
                  <span
                    style={{
                      color: pagePhase === "/" ? colorFont : "#000000",
                    }}
                  >
                    Archiwum
                  </span>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="#" className="menu-link">
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        Strona archiwalna
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                {!user?.email ? (
                  <>
                    {" "}
                    <Link
                      href="#"
                      className="menu-link"
                      onClick={handleOpenModalMemo}
                    >
                      <span
                        style={{
                          color: pagePhase === "/" ? colorFont : "#000000",
                        }}
                      >
                        Logowanie
                      </span>
                    </Link>
                    <SignInModal
                      isOpen={isOpen}
                      handleClose={handleCloseModalMemo}
                      ariaHideApp={false}
                    />{" "}
                  </>
                ) : (
                  <Link href="#" className="menu-link" onClick={logoutUser}>
                    <span
                      style={{
                        color: pagePhase === "/" ? colorFont : "#000000",
                      }}
                    >
                      Wyloguj
                    </span>
                  </Link>
                )}
              </li>
            </div>
          </div>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;

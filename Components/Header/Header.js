import classes from "./header.module.css";
import Navbar from "./nowaNaw/NavBar";
import Slider from "./Slider/Slider";
import { useRouter } from "next/router";
const Header = ({}) => {
  const router = useRouter();
  const pagePhase = router.pathname;

  return (
    <>
      <header className={pagePhase === "/" ? classes.header : classes.header2}>
        <Navbar pagePhase={pagePhase} />
        {pagePhase === "/" ? <Slider /> : null}
      </header>
    </>
  );
};

export default Header;

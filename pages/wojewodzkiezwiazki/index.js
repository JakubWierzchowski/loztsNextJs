import styles from "./wojewodzkiezwiazki.module.css";
import zwiazki from "../../Components/data/wojewodzkieZwiazki";

const Wojewodzkiezwiazkiview = () => (
  <>
    <h1 className={styles.h1}> Wojewódzkie związki</h1>
    <ul className={styles.ul}>
      {zwiazki.map((item) => (
        <a
          key={item.title}
          className={styles.zwiazekLink}
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          <li className={styles.li}>{item.title}</li>
        </a>
      ))}
    </ul>
  </>
);

export default Wojewodzkiezwiazkiview;

import styles from "./zarzad.module.css";

const Zarzad = () => (
  <>
    <h1 className={styles.h1}>Zarząd</h1>
    <div className={styles.ulli}>
      <h2 className={styles.h2}>Dariusz Wierzchowski -PREZES</h2>
      <h4 className={styles.h4Black}>CZŁONKOWIE ZARZĄDU:</h4>
      <ul className={styles.ul}>
        <li className={styles.li}>
          Jarosław Maruszczak - <strong>WICEPREZES D/S SZKOLENIOWYCH</strong>
        </li>
        <li className={styles.li}>Artur Rachański</li>
        <li className={styles.li}>
          Andrzej Kołodziej - <strong>SKARBNIK</strong>
        </li>
        <li className={styles.li}>...</li>
      </ul>
      <ul className={styles.ul}>
        <h4 className={styles.h4Black}>KOMISJA REWIZYJNA</h4>
      </ul>
      <li className={styles.li}>
        Mariusz Baranowski - <strong>PRZEWODNICZĄCY</strong>
      </li>
      <li className={styles.li}>Mirosław Iwańczuk</li>
      <li className={styles.li}>Jakub Kańkowski</li>
    </div>
  </>
);
export default Zarzad;

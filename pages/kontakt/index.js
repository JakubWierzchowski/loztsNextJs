import styles from "./kontakt.module.css";

import Image from "next/image";

const Kontakt = () => (
  <>
    <div className={styles.centerLogo}>
      <Image
        className={styles.logo}
        src="/images/header/logo.png"
        alt="Logo"
        width={250}
        height={250}
      />
    </div>
    <div className={styles.div}>
      <ul className={styles.ul}>
        <li className={styles.liFirst}>
          LUBELSKI OKRĘGOWY ZWIĄZEK TENISA STOŁOWEGO W LUBLINIE
        </li>
        <li className={styles.li}>
          21-300 Radzyń Podlaski, ul. Wyszyńskiego 8/3
        </li>
        <li className={styles.li}>tel. 503 120 539</li>
        <li className={styles.li}>e-mail: lozts.poczta@onet.pl</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.liFirstRed}>Numer konta:</li>
        <li className={styles.liFirstRed}>
          Bank Spółdzielczy w Radzyniu Podlaskim
        </li>
        <li className={styles.liFirstRed}>
          Nr 43 8046 0002 2001 0003 0542 0001
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.liFirst}>Prezes Związku: Dariusz Wierzchowski</li>
        <li className={styles.li}>tel. kom. 503 120 539</li>
        <li className={styles.li}>e-mail: lozts.poczta@onet.pl</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.liFirst}>Adres do Korespondencji:</li>
        <li className={styles.li}>
          21-300 Radzyń Podlaski, ul. Wyszyńskiego 8/3
        </li>
      </ul>
    </div>
  </>
);
export default Kontakt;

import React from "react";
import styles from "./Clock.module.css";

function Countdown({ days, hours, mins, seconds }) {
  return (
    <section className={styles.timerContainer}>
      <section className={styles.timer}>
        <div className={styles.clock}>
          <section>
            <p>{days}</p>
            <small>Dni</small>
          </section>
          <span>:</span>
          <section>
            <p>{hours}</p>
            <small>Godzin</small>
          </section>{" "}
          <span>:</span>
          <section>
            <p>{mins}</p>
            <small>Minut</small>
          </section>{" "}
          <span>:</span>
          <section>
            <p>{seconds}</p>
            <small>Sekund</small>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Countdown;

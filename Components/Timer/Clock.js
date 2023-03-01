import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";
import Countdown from "./Countdown";

const Clock = ({
  data,
  turnament,
  setTimeDone,
  settimeToMuch,
  timeToMuch,
  date,
}) => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const dataInvite = date.map((e) => e.map((item) => item.datamomentInvite));
  const startTimer = () => {
    const countDownDate = new Date(dataInvite).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        setTimeDone(true);
        clearInterval(interval.current);
      }
      if (distance > 604800000) {
        settimeToMuch(true);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  const now = new Date().getTime();
  const turnamentDay = new Date(dataInvite).getTime();
  const diffrent = turnamentDay - now;

  const dayLeft = Math.floor(diffrent / (24 * 60 * 60 * 1000)) - 7;
  const hoursLeft = Math.floor(
    (diffrent % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  );
  const minsLeft = Math.floor((diffrent % (60 * 60 * 1000)) / (1000 * 60));

  const secondsLeft = Math.floor((diffrent % (60 * 1000)) / 1000);

  return (
    <>
      <div className={styles.wrapper1}>
        <div className={styles.wrapper}>
          {timeToMuch ? (
            <>
              <h3>Do zawodów zostało jeszcze zbyt dużo czasu. Wróć za</h3>
              <Countdown
                seconds={secondsLeft}
                mins={minsLeft}
                hours={hoursLeft}
                days={dayLeft}
              />
            </>
          ) : (
            <section className={styles.timerContainer}>
              <h3>Do końca zgłoszeń pozostało: </h3>
              <Countdown
                seconds={timerSeconds}
                mins={timerMinutes}
                hours={timerHours}
                days={timerDays}
              />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;

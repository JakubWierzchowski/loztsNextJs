import React from "react";
import styles from "./CalendarMain.module.scss";
import "./CalendarMain.module.scss";
import CalendarItem from "./calendarItem";
import Link from "next/link";
import calendarmonth from "../../data/kalendarz";
const calendarfunction = () => (
  <section className={styles.boxEvents}>
    <div className={styles.eventsTitle}>
      <h3> Nadchodzące wydarzenia</h3>
    </div>
    <div className={styles.grid}>
      {calendarmonth.slice(0, 2).map((item) => (
        <CalendarItem key={item.details.map((key) => key.title)} {...item} />
      ))}
    </div>

    <div className={styles.moreEvents}>
      <Link href="/calendar" className={styles.moreEvents__link}>
        Więcej wydarzeń
      </Link>
    </div>
  </section>
);
export default calendarfunction;

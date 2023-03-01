import React from "react";
import styles from "./InformationDetails.module.scss";
import Link from "next/link";
function Information({ title, data, text, link, signature }) {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.news__tittle}>
          <h2 className={styles.news__tittle1}>{title}</h2>
        </div>
        <div className={styles.news__date}>{data}</div>
        <div className={styles.news__text}>{text}</div>
        {link ? (
          <Link className={styles.link} href={link} target="_blank">
            {link}
          </Link>
        ) : (
          ""
        )}
        <div className={styles.news__signature}>{signature}</div>
      </div>
    </>
  );
}

export default Information;

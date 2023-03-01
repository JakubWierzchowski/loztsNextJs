import React, { Link } from "react";
import { NavLink } from "react-bootstrap";
import styles from "./NewsItem.module.scss";
const NewsItem = ({ title, data, text, link, signature }) => (
  <div className={styles.news}>
    <NavLink className={styles.information__link} href="information.html#1">
      <h2 className={styles.newsTittleH2}>{title}</h2>
      <div className={styles.news__date}>{data}</div>
      <div className={styles.text}>{text}</div>
      {link ? (
        <Link className={styles.link} href={link} target="_blank">
          {link}
        </Link>
      ) : (
        ""
      )}
      <div className={styles.news__signature}>{signature}</div>
    </NavLink>
  </div>
);
export default NewsItem;

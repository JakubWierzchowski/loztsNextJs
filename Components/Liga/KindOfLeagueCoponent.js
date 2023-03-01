import React from "react";
import styles from "../Liga/LeagueView2K.module.scss";
import { useRouter } from "next/router";

const data = [
  {
    ID: "/liga/liga2k",
    link: "/liga/liga2k",
    text: "II Liga Kobiet",
  },
  {
    ID: "/liga/liga2m",
    link: "/liga/liga2m",
    text: "II Liga Mężczyzn",
  },
  {
    ID: "/liga/liga3m",
    link: "/liga/liga3m",
    text: "III Liga Mężczyzn",
  },
  {
    ID: "/liga/liga4m",
    link: "/liga//liga4m",
    text: "IV Liga Mężczyzn",
  },
];

function KindOfLeagueCoponent() {
  const router = useRouter();
  const localization = router.route;
  const data2 = data.filter((item) => (item.ID !== localization ? item : ""));
  return (
    <div className={styles.categorylist}>
      {data2.map((item) => (
        <a className={styles.a__link} href={item.link} key={item.ID}>
          <div className={styles.category}>{item.text}</div>
        </a>
      ))}
    </div>
  );
}

export default KindOfLeagueCoponent;

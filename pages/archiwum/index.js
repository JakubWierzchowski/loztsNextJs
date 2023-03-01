import React from "react";
import Link from "next/link";
import styles from "./Archiwum.module.scss";

const galeriaView = [
  {
    month: "Sezon 2021-2022",
    details: [
      {
        article: "article2021-2022",
        itemId: "informacje2021-2022",
        downloads: "downloads2021-2022",
        IIligaKobiet: "IIligaKobiet2021-2022",
        IIligaMezczyzn: "IIligaMezczyzn2021-2022",
        IIIligaMezczyzn: "IIIligaMezczyzn2021-2022",
        ligaIVMezczyzn: "IVligaMezczyzn2021-2022",
      },
    ],
  },
  //   {
  //     month: "Sezon 2022-2023",
  //     details: [
  //       {
  //         article: "article2022-2023",
  //         itemId: "informacje2022-2023",
  //         downloads: "downloads2022-2023",
  //         IIligaKobiet: "IIligaKobiet2022-2023",
  //         IIligaMezczyzn: "IIligaMezczyzn2022-2022",
  //         IIIligaMezczyzn: "IIIligaMezczyzn2022-2023",
  //         ligaIVMezczyzn: "IVligaMezczyzn2022-2023",
  //       },
  //     ],
  //   },
];

const Archiwum = () => (
  <main className="main">
    <div className="mainBackground">
      <div className={styles.flexBox}>
        {galeriaView.map((item) => (
          <>
            <h1>{item.month}</h1>

            {item.details.map((item, index) => (
              <div className={styles.flexItem} key={index}>
                <div className={styles.box}>
                  <Link
                    href={`/archiwum/${item.downloads}`}
                    className={styles.links}
                  >
                    <div className={styles.div}>Komunikaty</div>
                  </Link>
                  <Link
                    href={`/archiwum/${item.article}`}
                    className={styles.links}
                  >
                    <div className={styles.div}>Artykuły</div>
                  </Link>
                  <Link
                    href={`/archiwum/${item.itemId}`}
                    className={styles.links}
                  >
                    <div className={styles.div}>Informacje</div>
                  </Link>
                  <div>
                    <Link
                      href={`/archiwum/liga/K2/${item.IIligaKobiet}`}
                      className={styles.links}
                    >
                      <div className={styles.div}>II liga Kobiet</div>
                    </Link>
                    <Link
                      href={`/archiwum/liga/M2/${item.IIligaMezczyzn}`}
                      className={styles.links}
                    >
                      <div className={styles.div}>II liga Mężczyzn</div>
                    </Link>
                    <Link
                      href={`/archiwum/liga/M3/${item.IIIligaMezczyzn}`}
                      className={styles.links}
                    >
                      <div className={styles.div}>III Liga Mężczyzn</div>
                    </Link>
                    <Link
                      href={`/archiwum/liga/M4/${item.ligaIVMezczyzn}`}
                      className={styles.links}
                    >
                      <div className={styles.div}>IV liga Mężczyzn</div>
                    </Link>
                  </div>

                  {/* <Link
                    href={`/archiwum/${item.itemId}`}
                    className={styles.articleLink}
                  >
                    <div>Galeria</div>
                  </Link> */}

                  {/* <Link
                    href={`/archiwum/${item.itemId}`}
                    className={styles.articleLink}
                  >
                    <div>Galeria</div>
                  </Link> */}
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  </main>
);
export default Archiwum;

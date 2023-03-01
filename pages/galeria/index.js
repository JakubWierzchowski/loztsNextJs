import styles from "../../Components/Galeria/galeria.module.scss";
import Image from "next/image";
import Link from "next/link";

const Galeria = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h1 className={styles.galeriaTitle} key={item.sezon}>
            {item.sezon}
          </h1>
          <div className={styles.flex}>
            {item.data.map((turnaments) => (
              <div className={styles.flexItem} key={turnaments.ID}>
                <Link
                  href={`/galeria/${turnaments.ID}`}
                  className={styles.articleLink}
                >
                  <div className={styles.test}>
                    <Image
                      width={300}
                      height={300}
                      src={`/${turnaments.firstPhoto}`}
                      className={styles.img}
                      alt="mainPhoto"
                    />
                  </div>
                  <h2 className={styles.underPhoto}>{turnaments.text}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Galeria;

export async function getStaticProps() {
  const { allData } = await import("../../data/galeria.json");
  return {
    props: {
      data: allData,
    },
  };
}

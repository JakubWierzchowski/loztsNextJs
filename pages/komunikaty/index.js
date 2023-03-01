import Link from "next/link";
import styles1 from "../../Components/Komunikaty/Komunikatytable.module.scss";

function Komunikaty({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className={styles1.category}>{item.kategoria}</h2>
          <table>
            <thead>
              <tr>
                <th>
                  <strong>L.p</strong>
                </th>
                <th>
                  <strong>Nazwa</strong>
                </th>
                <th>
                  <strong>Download</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              {item.details.map((sub, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sub.title}</td>
                  <td>
                    <Link
                      className={styles1.links}
                      href={`${sub.download}`}
                      target="_blank"
                      download
                    >
                      Download
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export default Komunikaty;

export async function getStaticProps() {
  const { pliki } = await import("../../data/komunikaty.json");
  return {
    props: {
      data: pliki,
    },
  };
}

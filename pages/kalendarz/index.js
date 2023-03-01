import styles from "../../Components/Kalendarz/Calendar.module.scss";
import Link from "next/link";
import moment from "moment";
import {
  ColorsCategory,
  DivCategory,
  theme,
} from "../../Components/Kalendarz/Calendar.style";
import { ThemeProvider } from "styled-components";

function Calendar({ data }) {
  const myDate = moment().format("YYYY-MM-DD");
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h2 className={styles.month}>{item.month}</h2>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>
                  <strong>Data</strong>
                </th>
                <th className={styles.th}>
                  <strong>Nazwa</strong>
                </th>
                <th className={styles.th}>
                  <strong>Miejsce</strong>
                </th>
                <th className={styles.th}>
                  <strong>Kategoria</strong>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {item.details.map((item) => (
                <tr className={styles.tr} key={item.title}>
                  {moment(item.datamoment).isAfter(myDate) ? (
                    <>
                      <td className={styles.td}>{item.data}</td>
                      <td className={styles.td}>
                        {!item.datamomentInvite ? (
                          <div> {item.title}</div>
                        ) : (
                          <Link
                            href={`/kalendarz/${item.title}`}
                            className={styles.links}
                          >
                            {item.title}
                          </Link>
                        )}
                      </td>
                      <td className={styles.td}>{item.place}</td>
                      <td className={styles.td}>
                        <DivCategory>
                          <ThemeProvider theme={theme}>
                            <ColorsCategory categories={item.categories}>
                              {item.categories}
                            </ColorsCategory>
                          </ThemeProvider>
                        </DivCategory>
                      </td>
                    </>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export default Calendar;

export async function getStaticProps() {
  const { calendar } = await import("../../data/kalendarz.json");
  return {
    props: {
      data: calendar,
    },
    revalidate: 10,
  };
}

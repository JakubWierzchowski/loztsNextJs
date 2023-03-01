import React from "react";
import styles from "./PlayerTable.module.scss";
import { Button } from "../Atoms/Buttons";
function PlayersTable({ data, label, deletePlayer, typeOfUser, timeDone }) {
  return (
    <>
      <h1 className={styles.month}>{label}</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <strong>L.P</strong>
            </th>
            <th className={styles.th}>
              <strong>Zawodnik</strong>
            </th>
            <th className={styles.th}>
              <strong>Klub</strong>
            </th>
            <th className={styles.th}>
              <strong>Dodano</strong>
            </th>
            <th className={styles.th}>
              <strong>Usuń</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{user.player}</td>
              <td className={styles.td}>{user.club} </td>
              <td className={styles.td}>{user.timeadd} </td>
              <td>
                {timeDone ? (
                  <div>Czas minął</div>
                ) : typeOfUser === user.users ? (
                  <Button onClick={() => deletePlayer(user.id)} delete>
                    Usuń
                  </Button>
                ) : (
                  <div>Brak dostępu</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default PlayersTable;

import React from "react";
import styles from "./LeagueTable.module.scss";
import styled from "styled-components";
import Link from "next/link";
import styles1 from "./LeagueSchudlesFirebase.module.scss";
import { useUserContext } from "../../Components/contex/userContext";
import { Button } from "../Atoms/Buttons";

const Image = styled.img`
  width: 60px;
  cursor: pointer;
  text-align: center;

  @media (min-width: 320px) {
    width: 30px;
  }
  @media (min-width: 425px) {
    width: 40px;
  }
  @media (min-width: 768px) {
    width: 50px;
  }
`;

const Links = styled.a`
  color: rgb(50, 113, 51);
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  text-transform: none;
  margin: 0;
  letter-spacing: 0;
  font-weight: 600;
  text-decoration: none;
`;

export default function LeagueSchedules({ data, data2 }) {
  const { user } = useUserContext();
  const filtredData = data.filter((item) => item.Kolejka === data2);
  return (
    <>
      <h2 className="firstScheduleName">{data2}</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.LP}>
              <strong>L.P </strong>
            </th>
            <th className={styles.Club}>
              <strong>Gospodarze</strong>
            </th>
            <th className={styles.Club}>
              <strong>Goście</strong>
            </th>
            <th colSpan="2">
              <strong>Wyniki</strong>
            </th>
            <th>
              <strong>Protokół</strong>
            </th>
            <th>
              <strong>Usuń</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            {filtredData.map((item2, index) => (
              <tr key={index}>
                <td key={index}>{index + 1}</td>
                <td>{item2.Gospodarz}</td>
                <td>{item2.Gosc}</td>
                <td>{item2.wynikGospodarz}</td>
                <td>{item2.wynikGosc}</td>
                <td>
                  {item2.img ? (
                    <Links
                      key={item2.img}
                      href={item2.img}
                      className={styles1.links}
                      target="_blank"
                    >
                      Protokół
                    </Links>
                  ) : (
                    <div>Brak protokołu</div>
                  )}
                </td>
                <td>
                  {user?.email === item2.user ? (
                    <>
                      <Button
                        key={item2.id}
                        delete
                        onClick={() => handleDelete(item2.id)}
                      >
                        delete
                      </Button>
                    </>
                  ) : (
                    <div>Brak dostępu</div>
                  )}
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </>
  );
}

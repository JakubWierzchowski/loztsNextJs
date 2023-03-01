import React from "react";

export default function LeagueMainTableComponent({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <strong>LP</strong>
            </th>
            <th>
              <strong>Klub</strong>
            </th>
            <th>
              <strong>Ilość meczy </strong>
            </th>
            <th>
              <strong>Punkty</strong>
            </th>
            <th>
              <strong>Gry+</strong>
            </th>
            <th>
              <strong>Gry-</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td>{item.team}</td>
              <td>{item.result.length}</td>
              <td>{item.wyniki.reduce((acc, el) => acc + el, 0)}</td>
              <td>{item.result.reduce((acc, el) => acc + el, 0)}</td>
              <td>
                {item.result.length * 10 -
                  item.result.reduce((acc, el) => acc + el, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

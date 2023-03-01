import React, { useState, useEffect } from "react";
import styless from "../../Components/Liga/LeagueView2K.module.scss";
import data3M from "../../Components/data/wyniki3M";
import LeagueMainTableComponent from "../../Components/Liga/LeagueMainTableComponent";
import KindOfLeagueCoponent from "../../Components/Liga/KindOfLeagueCoponent";
import useModal from "../../Components/hooks/useModal";
import Modal from "../../Components/Liga/AddPLayersModal";
import db from "../../Firebase/firebase-config";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import LeagueSchedulesFirebase from "../../Components/Liga/LeagueSchedules";
import { useUserContext } from "../../Components/contex/userContext";
import { Button } from "../../Components/Atoms/Buttons";
const nameRounds = [
  { name: "Numer kolejki" },
  { name: "1 kolejka GRUPA AWANSOWA - 08.01.2023r." },
  { name: "1 kolejka GRUPA SPADKOWA - 08.01.2023r." },
  { name: "11 kolejka - 18.12.2022r." },
  { name: "10 kolejka - 11.12.2022r." },
  { name: "9 kolejka - 04.12.2022r." },
  { name: "8 kolejka - 27.11.2022r." },
  { name: "7 kolejka - 20.11.2022r." },
  { name: "6 kolejka - 13.11.2022r." },
  { name: "5 kolejka - 30.10.2022r." },
  { name: "4 kolejka - 23.10.2022r." },
  { name: "3 kolejka - 16.10.2022r." },
  { name: "2 kolejka - 09.10.2022r." },
  { name: "1 kolejka – 02.10.2022r." },
];
const nameTeams = [
  //   details: [
  {
    team: " UKS Wola Osowińska",
  },
  {
    team: "KS Cisowianka Drzewce",
  },
  {
    team: "UKS Żaczek Fajsławice",
  },
  {
    team: "ULKS  Dzierzkowice",
  },
  {
    team: "KS Ogniwo II Chełm",
  },
  {
    team: "MKS Lewart AGS II Lubartów",
  },
  {
    team: "KTS Topspin I Kurów",
  },
  {
    team: "KTS Topspin II Kurów",
  },
  {
    team: "UKS Baczyński Biała Podlaska",
  },
  {
    team: "MLKS Wola Sernicka",
  },
  {
    team: "MKS  STS  II  Lubartów",
  },
  {
    team: "KS Heksa Niedrzwica Duża",
  },
];

function M3() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();
  const [Liga3M, setliga3M] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "liga3M"), (snapshot) =>
        setliga3M(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const itemWyniki = data3M.map((item) =>
    item.details.map((item) => item.wyniki)
  );
  const itemResult = data3M.map((item) =>
    item.details.map((item) => item.result)
  );

  itemWyniki[0][0].length < itemResult[0][0].length
    ? data3M.forEach((item) =>
        item.details.forEach((item) =>
          item.result.forEach((result) =>
            result >= 5
              ? result > 5
                ? item.wyniki.push(2)
                : item.wyniki.push(1)
              : item.wyniki.push(0)
          )
        )
      )
    : itemWyniki.pop();

  data3M.map((item) =>
    item.details.map(
      (item) =>
        (item.result = `empty`
          ? item.result.filter((a = 0) => Number)
          : item.result)
    )
  );

  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  data3M.map((item) =>
    item.details.sort((a, b) => sum(b.result) - sum(a.result))
  );
  data3M.map((item) =>
    item.details.sort((a, b) => sum(b.wyniki) - sum(a.wyniki))
  );

  const handleDelete = async (id) => {
    const docRef = doc(db, "liga3M", id);
    await deleteDoc(docRef);
  };
  const round = nameRounds.slice(1, nameRounds.length);
  return (
    <>
      <KindOfLeagueCoponent />
      <h1 className={styless.h1title}>ROZGRYWKI III LIGI MĘŻCZYZN</h1>
      <h2 className={styless.h2title}>SEZON SPORTOWY 2022/2023</h2>
      {data3M.map((item, index) => (
        <div key={index}>
          <h2 className={styless.h2title}>{item.month}</h2>
          <LeagueMainTableComponent data={item.details} />
        </div>
      ))}

      {/* <LeagueSchedules data={terminarz} /> */}
      {user?.email ? (
        <Button upload onClick={handleOpenModal}>
          Dodaj kolejkę{" "}
        </Button>
      ) : null}
      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        nameRounds={nameRounds}
        teams={nameTeams}
        leagueName="liga3M"
      />
      {round.map((item, index) => (
        <LeagueSchedulesFirebase
          data={Liga3M}
          nameRounds={nameRounds}
          handleDelete={handleDelete}
          data2={item.name}
          key={index}
          ariaHideApp={false}
        />
      ))}
    </>
  );
}

export default M3;

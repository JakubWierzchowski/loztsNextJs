import React, { useState, useEffect } from "react";
import styless from "../../Components/Liga/LeagueView2K.module.scss";
import data2M from "../../Components/data/wyniki2M";
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
  { name: "Numer kolejki", id: 0 },
  { name: "1 kolejka GRUPA AWANSOWA - 08.01.2023r.", id: 13 },
  { name: "1 kolejka GRUPA SPADKOWA - 08.01.2023r.", id: 12 },
  { name: "11 kolejka - 18.12.2022r.", id: 11 },
  { name: "10 kolejka - 11.12.2022r.", id: 10 },
  { name: "9 kolejka - 04.12.2022r.", id: 9 },
  { name: "8 kolejka - 27.11.2022r.", id: 8 },
  { name: "7 kolejka - 20.11.2022r.", id: 7 },
  { name: "6 kolejka - 13.11.2022r.", id: 6 },
  { name: "5 kolejka - 30.10.2022r.", id: 5 },
  { name: "4 kolejka - 23.10.2022r.", id: 4 },
  { name: "3 kolejka - 16.10.2022r.", id: 3 },
  { name: "2 kolejka - 09.10.2022r.", id: 2 },
  { name: "1 kolejka – 02.10.2022r.", id: 1 },
];
const nameTeams = [
  {
    team: "Nazwa Drużyny",
  },
  {
    team: "ATS  AKANZA UMCS  II Lublin",
  },
  {
    team: "UKS Grot-Michał I Werbkowice",
  },
  {
    team: "SMS  Włodawa",
  },
  {
    team: "KS CKFIS I Bełżyce",
  },
  {
    team: "MKS Lewart AGS  I Lubartów",
  },
  {
    team: "KS Sygnał Lublin",
  },
  {
    team: "UPKS Błękitni Leopoldów",
  },
  {
    team: "U-MKTS  LOB  Dęblin",
  },
  {
    team: "KS  Ogniwo I Chełm",
  },
  {
    team: "KS Sokół Zwierzyniec",
  },
  {
    team: "AZS Politechnika Lublin",
  },
  {
    team: "MKS  STS  I Lubartów",
  },
];

function M2() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();
  const [Liga2M, setliga2M] = useState([]);
  const y = data2M.map((item) => item.result);
  const x = data2M.map((item) => item.wyniki);
  const handleDelete = async (id) => {
    const docRef = doc(db, "liga2M", id);
    await deleteDoc(docRef);
  };
  useEffect(
    () =>
      onSnapshot(collection(db, "liga2M"), (snapshot) =>
        setliga2M(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const itemWyniki = data2M.map((item) =>
    item.details.map((item) => item.wyniki)
  );
  const itemResult = data2M.map((item) =>
    item.details.map((item) => item.result)
  );

  itemWyniki[0][0].length < itemResult[0][0].length
    ? data2M.forEach((item) =>
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

  data2M.map((item) =>
    item.details.map(
      (item) =>
        (item.result = `empty`
          ? item.result.filter((a = 0) => Number)
          : item.result)
    )
  );

  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  data2M.map((item) =>
    item.details.sort((a, b) => sum(b.result) - sum(a.result))
  );
  data2M.map((item) =>
    item.details.sort((a, b) => sum(b.wyniki) - sum(a.wyniki))
  );
  const round = nameRounds.slice(1, nameRounds.length);
  return (
    <>
      <KindOfLeagueCoponent />
      <h1 className={styless.h1title}>ROZGRYWKI II LIGI MĘŻCZYZN</h1>
      <h2 className={styless.h2title}>SEZON SPORTOWY 2022/2023</h2>
      {data2M.map((item, index) => (
        <div key={index}>
          <h2 className={styless.h2title}>{item.month}</h2>
          <LeagueMainTableComponent data={item.details} />
        </div>
      ))}

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
        leagueName="liga2M"
        ariaHideApp={false}
      />
      {round.map((item) => (
        <LeagueSchedulesFirebase
          data={Liga2M}
          nameRounds={nameRounds}
          handleDelete={handleDelete}
          data2={item.name}
          key={item.id}
        />
      ))}
    </>
  );
}

export default M2;

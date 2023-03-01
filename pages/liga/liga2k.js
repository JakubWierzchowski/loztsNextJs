import React, { useState, useEffect } from "react";
import styless from "../../Components/Liga/LeagueView2K.module.scss";
import data2K from "../../Components/data/wyniki2k";
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
  { name: "4 kolejka - 08.01.2023r.", id: 4 },
  { name: "3 kolejka - 04.12.2022r.", id: 3 },
  { name: "2 kolejka - 13.11.2022r.", id: 2 },
  { name: "1 kolejka – 16.10.2022r.", id: 1 },
];
const nameTeams = [
  {
    team: "Nazwa Drużyny",
    id: 1,
  },
  {
    team: "LUKS Fala Piotrawin",
    id: 2,
  },
  {
    team: "UKS Optima Zamość",
    id: 3,
  },
  {
    team: "MKS Lewart AGS Lubartów",
    id: 4,
  },
  {
    team: "KS Sygnał Lublin",
    id: 5,
  },
];
function K2() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();
  const [Liga2k, setliga2k] = useState([]);
  const y = data2K.map((item) => item.result);
  const x = data2K.map((item) => item.wyniki);

  useEffect(
    () =>
      onSnapshot(collection(db, "liga"), (snapshot) =>
        setliga2k(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleDelete = async (id) => {
    const docRef = doc(db, "liga", id);
    await deleteDoc(docRef);
  };

  x[0].length < y[0].length
    ? data2K.map((item) =>
        item.result.map((result) =>
          result >= 5
            ? result > 5
              ? item.wyniki.push(2)
              : item.wyniki.push(1)
            : item.wyniki.push(0)
        )
      )
    : x.pop();

  const namerounds = nameRounds.map((item) => item.name);
  const kolejka = Liga2k.map((item) => item.Kolejka);
  const round = nameRounds.slice(1, nameRounds.length);

  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  data2K.sort((a, b) => sum(b.result) - sum(a.result));
  data2K.sort((a, b) => sum(b.wyniki) - sum(a.wyniki));

  return (
    <>
      <KindOfLeagueCoponent />
      <h1 className={styless.h1title}>ROZGRYWKI II LIGI Kobiet</h1>
      <h2 className={styless.h2title}>SEZON SPORTOWY 2022/2023</h2>
      <LeagueMainTableComponent data={data2K} />
      {user?.email ? (
        <Button upload onClick={handleOpenModal}>
          Dodaj kolejkę
        </Button>
      ) : null}
      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        nameRounds={nameRounds}
        teams={nameTeams}
        leagueName="liga"
        ariaHideApp={false}
      />
      {round.map((item) => (
        <LeagueSchedulesFirebase
          data={Liga2k}
          nameRounds={nameRounds}
          handleDelete={handleDelete}
          data2={item.name}
          key={item.id}
        />
      ))}
    </>
  );
}

export default K2;

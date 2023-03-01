import React, { useState, useEffect } from "react";
import styless from "../../Components/Liga/LeagueView2K.module.scss";
import data4M from "../../Components/data/wyniki4M";
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
  // { name: "11 kolejka - 18.12.2022r." },
  { name: "6 kolejka - 08.01.2023r." },
  { name: "5 kolejka - 04.12.2022r." },
  { name: "4 kolejka - 27.11.2022r." },
  { name: "3 kolejka - 13.11.2022r." },
  { name: "2 kolejka - 16.10.2022r." },
  { name: "1 kolejka – 02.10.2022r." },
];
const nameTeams = [
  {
    team: "Nazwa Drużyny",
  },
  {
    team: "LKS Tur Turze Rogi",
  },
  {
    team: "UKS Dystans Niedżwiada",
  },
  {
    team: "UKS Niemce",
  },
  {
    team: "MOSiR Huragan Międzyrzec Podl.",
  },
  {
    team: "GUKS Bobry Bobrowniki",
  },
  {
    team: "LUKS Wola Skromowska",
  },
  {
    team: "UKS Grot-Michał II Werbkowice",
  },
  {
    team: "KS GOK Trzydnik Duży",
  },
  {
    team: "KS CKFiS II Bełżyce",
  },
  {
    team: "MUKS Roztocze Szczebrzeszyn",
  },
  {
    team: "KS Ogniwo III Chełm",
  },
];

function M4() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();
  const [Liga4M, setliga4M] = useState([]);

  const y = data4M.map((item) => item.result);
  const x = data4M.map((item) => item.wyniki);
  const handleDelete = async (id) => {
    const docRef = doc(db, "liga4M", id);
    await deleteDoc(docRef);
  };
  useEffect(
    () =>
      onSnapshot(collection(db, "liga4M"), (snapshot) =>
        setliga4M(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const itemWyniki = data4M.map((item) =>
    item.details.map((item) => item.wyniki)
  );
  const itemResult = data4M.map((item) =>
    item.details.map((item) => item.result)
  );

  itemWyniki[0][0].length < itemResult[0][0].length
    ? data4M.forEach((item) =>
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

  data4M.map((item) =>
    item.details.map(
      (item) =>
        (item.result = `empty`
          ? item.result.filter((a = 0) => Number)
          : item.result)
    )
  );

  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  data4M.map((item) =>
    item.details.sort((a, b) => sum(b.result) - sum(a.result))
  );
  data4M.map((item) =>
    item.details.sort((a, b) => sum(b.wyniki) - sum(a.wyniki))
  );
  const round = nameRounds.slice(1, nameRounds.length);

  return (
    <main className="main">
      <div className="mainBackground">
        <KindOfLeagueCoponent />
        <h1 className={styless.h1title}>ROZGRYWKI IV LIGI MĘŻCZYZN</h1>
        <h2 className={styless.h2title}>SEZON SPORTOWY 2022/2023</h2>
        {data4M.map((item, index) => (
          <div key={index}>
            <h2 className={styless.h2title}>{item.month}</h2>
            <LeagueMainTableComponent data={item.details} />
          </div>
        ))}

        {/* <LeagueSchedules data={terminarz} /> */}

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
          leagueName="liga4M"
        />
        {round.map((item, index) => (
          <LeagueSchedulesFirebase
            data={Liga4M}
            nameRounds={nameRounds}
            handleDelete={handleDelete}
            data2={item.name}
            key={index}
            ariaHideApp={false}
          />
        ))}
      </div>
    </main>
  );
}

export default M4;

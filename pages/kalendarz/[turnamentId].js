import { useRef, useState } from "react";
import { useRouter } from "next/router";
import useModal from "../../Components/hooks/useModal";
import Modal from "../../Components/AddPlayers/AddPlayerModal";
import PlayersTable from "../../Components/AddPlayers/PlayersTable";
import { ModalButton } from "../../Components/AddPlayers/AddPlayerModal.style";
import calendar from "../../Components/data/kalendarz";
import Clock from "../../Components/Timer/Clock";
import { useUserContext } from "../../Components/contex/userContext";
import styles from "../../Components/Kalendarz/Calendarview.module.scss";

const Turnament = ({ date }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const router = useRouter();
  const turnament = router.query.turnamentId;
  const [newPlayer, setNewPlayer] = useState(date);
  const [timeDone, setTimeDone] = useState(false);
  const [timeToMuch, settimeToMuch] = useState(false);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const genderInputRef = useRef();
  const { user } = useUserContext();
  const [message, SetMessage] = useState("");
  const submitFormHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const enteredTurniej = turnament;
    const enteredGender = genderInputRef.current.value;
    try {
      const reqBody = {
        club: enteredEmail,
        player: enteredFeedback,
        turnament: enteredTurniej,
        gender: enteredGender,
        users: user?.email,
      };
      const response = await fetch(`/api/zgloszenia`, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response
        .json()
        .then(handleCloseModal())
        .then(fetchData());
      SetMessage(data.message);
    } catch (e) {
      SetMessage(e.message);
    }
  };

  function fetchData() {
    fetch(`/api/zgloszenia/${turnament}`)
      .then((response) => response.json())
      .then((data) => setNewPlayer(data));
  }
  const deletePlayer = async (id) => {
    const response = await fetch(`/api/zgloszenia/player/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => SetMessage(data.message))
      .then(fetchData());
  };

  return (
    <>
      {timeDone ? (
        <h3 className={styles.clockTitle}>Czas zgłoszeń minął! </h3>
      ) : (
        <>
          <>
            <Clock
              data={calendar}
              turnament={turnament}
              setTimeDone={setTimeDone}
              settimeToMuch={settimeToMuch}
              timeToMuch={timeToMuch}
              date={date}
            />
            {timeToMuch ? null : (
              <>
                {user?.email ? (
                  <div className={styles.wrapper}>
                    <ModalButton onClick={handleOpenModal}>
                      Dodaj zawodnika
                    </ModalButton>
                    <Modal
                      date={date}
                      isOpen={isOpen}
                      handleClose={handleCloseModal}
                      submitFormHandler={submitFormHandler}
                      emailInputRef={emailInputRef}
                      feedbackInputRef={feedbackInputRef}
                      genderInputRef={genderInputRef}
                    />
                  </div>
                ) : null}
              </>
            )}
          </>
          <h1>{message}</h1>
        </>
      )}
      {newPlayer.map((item) =>
        item?.map((item2) =>
          item2.typeofTurnament.map((item3) =>
            item3?.table.map((item, index) => (
              <div key={index}>
                {item !== "Wybierz kategorię" ? (
                  <>
                    <PlayersTable
                      label={item}
                      currentUser={user?.email}
                      data={item2.players.filter(
                        (gender) => gender.gender === item
                      )}
                      deletePlayer={deletePlayer}
                      typeOfUser={user?.email}
                      timeDone={timeDone}
                    />
                  </>
                ) : null}
              </div>
            ))
          )
        )
      )}
    </>
  );
};
export default Turnament;

export async function getServerSideProps(context) {
  const { calendar } = await import("../../data/kalendarz.json");
  const { params } = context;
  const id = params.turnamentId;
  const filteredData = calendar.map((item) =>
    item.details.filter((e) => e.title === id)
  );
  return {
    props: {
      date: filteredData,
    },
  };
}

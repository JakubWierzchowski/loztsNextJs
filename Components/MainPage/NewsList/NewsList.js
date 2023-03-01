import { useState, useEffect, useRef } from "react";
import styles from "./NewsList.module.scss";
import { useUserContext } from "../../contex/userContext";
import logo from "../../../public/images/header/logo.png";
import useModal from "../../hooks/useModal";
import Modal from "./ModalAddInformation";
import Image from "next/image";
import { Button } from "../../Atoms/Buttons";
import { ModalButton } from "./Modal.styled";

function NewsList() {
  const [article, setArticle] = useState([]);
  const titleInputRef = useRef();
  const textInputRef = useRef();
  const signatureInputRef = useRef();
  const [currentInfo, setCurrentInfo] = useState(article);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();
  const handleOpenInfo = (article) => {
    setCurrentInfo(article);
  };

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredSignature = signatureInputRef.current.value;

    let reqBody = {
      title: enteredTitle,
      text: enteredText,
      signature: enteredSignature,
    };

    fetch(`/api/artykuly`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    handleCloseModal();
  }

  useEffect(() => {
    fetch(`/api/artykuly`)
      .then((response) => response.json())
      .then((data) => setArticle(data.players));
  });

  function fetchData() {
    fetch(`/api/artykuly`)
      .then((response) => response.json())
      .then((data) => setArticle(data.players));
  }

  const sortInformation = article.sort((a, b) => (a.id > b.id ? -1 : 0));
  let x = sortInformation[0];

  function deleteArtykul(id) {
    fetch(`/api/artykuly/${id}`, {
      method: "DELETE",
    })
      .then(fetchData())
      .then(setCurrentInfo(article[0]));
  }

  return (
    <>
      <div className={styles.articles}>
        <>
          <div className={styles.mainCopomonents}>
            <div className={styles.wrapper}>
              <div className={styles.title}>
                <h3 className={styles.tittle1}>Aktualności</h3>
              </div>
              <div className={styles.skroty}>
                {user?.email === "lozts1937@gmail.com" ? (
                  <ModalButton onClick={handleOpenModal}>
                    Dodaj informację
                  </ModalButton>
                ) : null}
                <Modal
                  isOpen={isOpen}
                  handleClose={handleCloseModal}
                  submitFormHandler={submitFormHandler}
                  titleInputRef={titleInputRef}
                  textInputRef={textInputRef}
                  signatureInputRef={signatureInputRef}
                />

                {sortInformation.map((item, index) => (
                  <div
                    key={index}
                    className={styles.wrapperComponetns}
                    onClick={() => handleOpenInfo(item)}
                  >
                    <div className={styles.flexboxShort}>
                      <div className={styles.itemShortTitle}>{item.title}</div>
                      <div className={styles.itemShortData}>{item.timeadd}</div>
                    </div>
                    <div>{item.text.slice(0, 100) + "..."}</div>
                  </div>
                ))}
              </div>
              <div className={styles.articles2}>
                <>
                  <div className={styles.flexBox}>
                    <div className={styles.itemHeadArticle}>
                      <Image
                        className={styles.image}
                        src={logo}
                        height={140}
                        width={80}
                        alt=""
                      />
                      <div className={styles.articleData}>
                        {currentInfo.length === 0
                          ? x?.timeadd
                          : currentInfo.data}
                      </div>
                    </div>
                    <div className={styles.itemTitleData}>
                      {currentInfo.length === 0 ? x?.title : currentInfo.title}
                    </div>

                    <div className={styles.item}>
                      {currentInfo.length === 0 ? x?.text : currentInfo.text}
                    </div>
                    <div className={styles.itemSignature}>
                      {currentInfo.length === 0
                        ? x?.signature
                        : currentInfo.signature}
                    </div>
                    {user?.email === "lozts1937@gmail.com" ? (
                      <Button
                        delete
                        onClick={() => deleteArtykul(currentInfo.id)}
                      >
                        Usuń informację
                      </Button>
                    ) : null}
                  </div>
                </>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default NewsList;

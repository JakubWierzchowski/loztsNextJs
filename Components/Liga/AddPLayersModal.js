import React, { useEffect, useState } from "react";

import styled from "styled-components";
import ReactModal from "react-modal";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import db from "../../Firebase/firebase-config";
import styles from "./Players.module.scss";
import { Button } from "../Atoms/Buttons";
import moment from "moment";
import FormField from "../Atoms/FormField/FormField";
import { storage } from "../../Firebase/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useUserContext } from "../../Components/contex/userContext";
import { ModalWrapper, Wrapper, Label } from "./Modal.styled";

const Modal = ({ handleClose, isOpen, nameRounds, teams, leagueName }) => {
  let [articles, setArticles] = useState([]);
  const [data, setData] = useState("");
  const { Gospodarz, Gosc, wynikGospodarz, wynikGosc, kolejka } = data;
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(
    () =>
      onSnapshot(collection(db, `${leagueName}`), (snapshot) =>
        setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({
              ...prev,
              time: moment().format("YYYY-DD-MM HH:mm:ss"),
              img: downloadURL,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const { user } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `${leagueName}`), {
      ...data,
      timestamp: serverTimestamp(),
      user: user.email,
    });
    handleClose();
    setArticles = [];
  };

  return (
    <>
      <ModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
        <>
          <Wrapper>
            <div className={styles.create}>
              <h2>Dodaj Kolejkę</h2>
              <form onSubmit={handleSubmit}>
                <Label>Gospodarz</Label>
                <select
                  placeholder="Gospodarz"
                  onChange={handleInputChange}
                  required
                  label="Gospodarz"
                  id="Gospodarz"
                  name="Gospodarz"
                  value={Gospodarz}
                >
                  {teams.map((item) => (
                    <option value={item.value} key={item.team}>
                      {item.team}
                    </option>
                  ))}
                </select>
                <Label>Goście</Label>
                <select
                  placeholder="Gość"
                  onChange={handleInputChange}
                  required
                  label="Gość"
                  id="Gosc"
                  name="Gosc"
                  value={Gosc}
                >
                  {teams.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.team}
                    </option>
                  ))}
                </select>
                <FormField
                  placeholder="Wynik Gospodarz"
                  onChange={handleInputChange}
                  required
                  label="Wynik Gospodarz"
                  id="wynikGospodarz"
                  name="wynikGospodarz"
                  value={wynikGospodarz}
                  type="number"
                />
                <FormField
                  placeholder="Wynik Gość"
                  onChange={handleInputChange}
                  required
                  label="Wynik Gość"
                  id="wynikGosc"
                  name="wynikGosc"
                  value={wynikGosc}
                  type="number"
                />
                <Label>Wybierz kolejkę</Label>
                <select
                  onChange={handleInputChange}
                  required
                  label="Kolejka"
                  id="Kolejka"
                  name="Kolejka"
                  value={kolejka}
                >
                  {nameRounds.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <FormField
                  placeholder="Image"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  label="Wybierz protokół(Maxymalny rozmiar pliku to 250KB!)"
                  id="Image"
                  name="Image"
                />
                <p>{per}</p>
                <Button disabled={per !== null && per < 100} type="submit">
                  Wyślij
                </Button>
              </form>
            </div>
          </Wrapper>
        </>

        <Button delete onClick={handleClose}>
          Close Modal
        </Button>
      </ModalWrapper>
    </>
  );
};

export default Modal;

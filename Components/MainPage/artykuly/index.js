import React, { useEffect, useState } from "react";
import "./ArticleList.module.scss";
import { Wrapper, StyledDetails } from "./ArticleStyled";
import logo from "../../../public/images/header/logo.png";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db, { storage } from "../../../Firebase/firebase-config";
import { Button } from "./ArticleStyled";
import moment from "moment";
import FormField from "../../Atoms/FormField/FormField";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { orderBy, query } from "firebase/firestore";
import { useUserContext } from "../../contex/userContext";
import Image from "next/image";
import styled from "./ArticleList.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ArticleDiv from "./ArticleDiv";

const Articles = (id) => {
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState("");
  const { title, tekst, signature } = data;
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "articles"), {
      ...data,
      timestamp: serverTimestamp(),
    });
  };
  const { user } = useUserContext();
  const handleDelete = async (id) => {
    const docRef = doc(db, "articles", id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    const playerCollectionRef2 = collection(db, "articles");
    const q = query(playerCollectionRef2, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setArticles(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    );

    return unsub;
  }, []);
  const [isInView, setIsInView] = useState(false);

  return (
    <article className="grid">
      {user ? (
        user.email === process.env.REACT_APP_ADMIN ? (
          <>
            <Wrapper>
              <div className={styles.create}>
                <h2>Dodaj Artykuł</h2>
                <form onSubmit={handleSubmit}>
                  <FormField
                    placeholder="Title"
                    onChange={handleInputChange}
                    required
                    label="Tytuł"
                    id="Title"
                    name="Title"
                    value={title}
                  />
                  <FormField
                    placeholder="Image"
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    label="Wybierz zdjęcie"
                    id="Image"
                    name="Image"
                  />
                  <FormField
                    isTextarea
                    placeholder="Tekst"
                    onChange={handleInputChange}
                    required
                    label="Tekst"
                    id="Tekst"
                    name="Tekst"
                    value={tekst}
                  />
                  <FormField
                    placeholder="Autor"
                    onChange={handleInputChange}
                    required
                    label="Autor"
                    id="Signature"
                    name="Signature"
                    value={signature}
                  />
                  <Button
                    upload
                    disabled={per !== null && per < 100}
                    type="submit"
                  >
                    Wyślij
                  </Button>
                </form>
              </div>
            </Wrapper>
          </>
        ) : null
      ) : null}
      <Wrapper>
        <h2 className="tittleGrid">
          <strong>Najnowsze artykuły</strong>{" "}
        </h2>
        <motion.div>
          {articles.map((item, index) => (
            <ArticleDiv key={index} item={item} index={index} user={user} />
          ))}
        </motion.div>
      </Wrapper>
      ;
    </article>
  );
};

export default Articles;

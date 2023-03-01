import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db from "../../Firebase/firebase-config";

export const useEffecInformation = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    const playerCollectionRef2 = collection(db, "information");
    const q = query(playerCollectionRef2, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setInformation(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    );

    return unsub;
  }, []);

  return information;
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "information", id);
  await deleteDoc(docRef);
};

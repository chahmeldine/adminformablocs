import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
import Header from "../../components/header/header";

const FormationScreen = () => {
  const [formations, setFormation] = useState([]);

  useEffect(async () => {
    const formationsList = await getFormations();
    setFormation(formationsList);
  });

  async function getFormations() {
    const formationCol = collection(db, "formations");
    const formationSnapshot = await getDocs(formationCol);
    const formationsList = formationSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return formationsList;
  }

  return (
    <div style={styles.container}>
      <Header />
      {formations.length > 0 &&
        formations?.map(({ id, price, title }) => (
          <div key={id}>
            <p>{title}</p>
            <p>{price}</p>
          </div>
        ))}
    </div>
  );
};

export default FormationScreen;

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
  },
};

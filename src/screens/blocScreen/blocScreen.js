// import { collection, getDocs } from "firebase/firestore/lite";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { db } from "../../api/firebase";
const BlocScreen = () => {
  // const [blocs, setBlocs] = useState([]);
  // const  useParams();
  // useEffect(async () => {
  //   const blocsList = await getBlocs();
  //   setBlocs(blocsList);
  // });

  // async function getBlocs() {
  //   const blocsCol = collection(db, "blocs");
  //   const blocsSnapshot = await getDocs(blocsCol);
  //   const blocsList = blocsSnapshot.docs.map((doc) => {
  //     const bloc = doc.data();
  //     return { ...bloc, id: doc.id };
  //   });
  //   return blocsList;
  // }
  return (
    <div>
      <p>ok</p>
    </div>
  );
};

export default BlocScreen;

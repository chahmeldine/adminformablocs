import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
const OrderFeed = () => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const formationsList = await getOrders();
    setOrders(formationsList);
  });

  async function getOrders() {
    const ordersCol = collection(db, "orders");
    const ordersSnapshot = await getDocs(ordersCol);
    const ordersList = ordersSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return ordersList;
  }

  return orders.map(
    ({ id, articles, date, email, nom, referenceNumber, telephone, total }) => (
      <div style={styled.order} key={id}>
        <div>
          <p> Ref commande : {referenceNumber}</p>
          <p>
            Date de la commande :
            {new Date(date.toDate()).toLocaleString("Fr-fr", "DD MMM YYYY")}
          </p>
          <p>{nom}</p>
          <p>{email}</p>
          <p>{telephone}</p>
        </div>

        <div style={styled.article}>
          {articles.map(({ id, price, title, reference }) => (
            <div style={styled.item} key={id}>
              <p>{title}</p>
              <p>{price}€</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: 25 }}>
          Total : {total}€
        </div>
      </div>
    )
  );
};

export default OrderFeed;

const styled = {
  order: {
    backgroundColor: "white",
    margin: 15,
    marginTop: 0,
    padding: 25,
    width: "50%",
    maxWidth: 450,

    borderRadius: 20,
  },

  article: {
    display: "flex",
    flexDirection: "column",
    border: "solid 1px #343A59",
    padding: 20,
    borderRadius: 15,

    marginBottom: 20,
  },

  item: {
    margin: 10,
    marginLeft: 0,
  },
};

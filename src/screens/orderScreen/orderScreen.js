import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
const OrderScreen = () => {
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
      <div key={id}>
        {articles.map(({ id, price, title, reference }) => (
          <div key={id}>
            <p>{title}</p>
            <p>{price}</p>
          </div>
        ))}
        <div>{total}</div>
        <div>
          <p>{referenceNumber}</p>
          <p>{nom}</p>
          <p>{email}</p>
          <p>
            {new Date(date.toDate()).toLocaleString("Fr-fr", "DD MMM YYYY")}
          </p>
          <p>{telephone}</p>
        </div>
      </div>
    )
  );
};

export default OrderScreen;

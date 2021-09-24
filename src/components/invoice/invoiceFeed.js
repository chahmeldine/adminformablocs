import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
const InvoiceFeed = () => {
  const [invoices, setInvoices] = useState([]);

  console.log(db.collection("invoices"));

  // useEffect(async () => {
  //   const invoicesList = await getInvoices();
  //   setInvoices(invoicesList);
  // });

  // async function getInvoices() {
  // const usersCol = ;
  // const invoicesSnapshot = await getDocs(usersCol);
  // const invoicesList = invoicesSnapshot.docs.map((doc) => {
  //     return { ...doc.data(), id: doc.id };
  //   });
  //   return invoicesList;
  // }

  return invoices.map(
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
        <div>Total : {total}€</div>
      </div>
    )
  );
};

export default InvoiceFeed;

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

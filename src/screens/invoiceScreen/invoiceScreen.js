import React from "react";
import InvoiceFeed from "../../components/invoice/invoiceFeed";
import Header from "../../components/header/header";
const invoiceScreen = () => {
  return (
    <div style={styled.container}>
      <Header />
      <InvoiceFeed />
    </div>
  );
};

export default invoiceScreen;

const styled = {
  container: {
    backgroundColor: "#343A59",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    paddingTop: 125,
  },

  article: {
    display: "flex",
    flexDirection: "column",
    border: "solid 1px red",
    padding: 20,
    borderRadius: 15,

    marginBottom: 20,
  },

  item: {
    margin: 10,
    marginLeft: 0,
  },
};

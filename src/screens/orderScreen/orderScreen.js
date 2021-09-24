import React from "react";
import OrderFeed from "../../components/order/orderFeed";
import Header from "../../components/header/header";
const OrderScreen = () => {
  return (
    <div style={styled.container}>
      <Header />
      <OrderFeed />
    </div>
  );
};

export default OrderScreen;

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

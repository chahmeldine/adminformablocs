import React from "react";

const Header = () => (
  <div style={styles.header}>
    <ul>
      <li> mes Devis</li>
      <li> mes Formations</li>
      <li> mes Commandes</li>
    </ul>
  </div>
);

export default Header;

const styles = {
  header: {
    backgroundColor: "white",
    display: "flex",
    backgroundColor: "red",
    justifyContent: "center",
    width: "100%",
    minHeight: 80,
  },
};

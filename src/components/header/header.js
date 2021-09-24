import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <div className="adminnav">
    <span>
      <h2>Admin formablocs</h2>
    </span>
    <nav>
      <ul>
        <li>
          <Link style={styles.link} to={"/order"}>
            Mes commandes
          </Link>
        </li>

        <li>
          <Link style={styles.link} to={"/invoice"}>
            Mes devis
          </Link>
        </li>
        <li>
          <Link style={styles.link} to={"/"}>
            Mes formations
          </Link>
        </li>
      </ul>
    </nav>
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

  logo: {},

  link: {
    textDecoration: "none",
    color: "#343A59",
  },
};

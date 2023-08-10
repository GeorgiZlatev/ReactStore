import React from "react";
import "../App.css";
import logo from "../logo.png";

import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/" className="font-bold">
        <div className="logo">
          <img src={logo} alt="Logo" width="40px" />
          Ecommerce Store
        </div>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;

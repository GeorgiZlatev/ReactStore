import React from "react";
import "../App.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">
        <div className="logo">
          <img src={logo} alt="Logo" width="40px" />
          Ecommerce Store
        </div>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Home"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Dashbord
          </Link>
        </li>
        <li>
          <Link
            to="/category"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Category
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;

import React from "react";
import { Link } from "react-router-dom";

function Index(props) {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3">Welcome to Ecommerce Store</h1>
      <div className="font-bold py-3">
        <ul>
          <li>
            <Link
              to="/Home"
              className="text-blue-500 py-3 border-t border-b block"
              onClick={props.closeMenu}
            >
              Look products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;

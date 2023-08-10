import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.product.id}`}></Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.product.id}`}>
            {props.product.category}
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;

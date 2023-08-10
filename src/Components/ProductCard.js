import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        </h3>
        <div className="font-bold mb-3">$ {props.product.price}</div>
        <div className="font-bold mb-3">Category: {props.product.category}</div>
        <div className="mb-3">{props.product.description}</div>
        <Link
          to={`/products/${props.product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
        <button className="p-2 flex justify-center w-full" onClick={addToCart}>
          Add to Cart
        </button>
        {addedToCart && (
          <div className="success-alert">Product added to cart</div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

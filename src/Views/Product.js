import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  // Create your own Mock API: https://mockapi.io/
  const url = `https://64cfd492ffcda80aff523764.mockapi.io/api/v1/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://mockapi.io/">mock API</a>.
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">
          <b>Price:</b> {product.data.price}
        </div>
        <div className="font-bold text-xl mb-3">
          <b>Discription:</b> {product.data.discription}
        </div>
        <div className="font-bold text-xl mb-3">
          <b>Discounted:</b> {product.data.discounted} %
        </div>
        <div className="font-bold text-xl mb-3">
          <b>Category:</b> {product.data.category}
        </div>
      </div>
    );
  }

  return <div className="container mx-auto">{content}</div>;
}

export default Product;

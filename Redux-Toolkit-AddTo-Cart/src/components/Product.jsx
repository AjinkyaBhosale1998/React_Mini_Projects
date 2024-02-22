import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (

    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.dishName} />
      <div className="card-body">
        <h5 class="card-title">{props.dishName}</h5>
        <p class="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.dishName, price: props.price }))
          }
          className="btn btn-primary mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
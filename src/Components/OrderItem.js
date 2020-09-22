import "../CSS/OrderItem.css";
import React from "react";
import { useStateValue } from "../StateProvider";

function OrderItem({ id, title, image, price, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="orderItem">
      <img className="orderItem__img" src={image} alt="" />
      <div className="orderItem_details">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <strong>${price.toFixed(2)}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>

          <div className="product__bought">
            <p>
              Items bought: <strong>{count}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;

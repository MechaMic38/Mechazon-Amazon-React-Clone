import "../CSS/Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const itemsInBasket = basket.map((item) => {
    return (
      <div key={item.id}>
        <BasketItem
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          count={item.count}
        />
      </div>
    );
  });

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3 className="checkout__user">{user && `Hello, ${user.email}`}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove>{itemsInBasket}</FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

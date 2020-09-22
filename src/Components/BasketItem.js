import "../CSS/BasketItem.css";
import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

function BasketItem({ id, title, image, price, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();

  const selectId = "numItems_" + id;

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        count,
      },
    });
  };

  const changeCountInBasket = () => {
    let select = document.querySelector(`#${selectId}`);
    let numItems = parseInt(select.options[select.selectedIndex].value);

    dispatch({
      type: "CHANGE_COUNT_IN_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        count: numItems,
      },
    });
  };

  useEffect(() => {
    const select = document.querySelector(`#${selectId}`);
    const selectOptions = select.options;
    for (let i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i].value == count) {
        select.selectedIndex = i;
        break;
      }
    }
  });

  return (
    <div className="basketItem">
      <img className="basketItem__img" src={image} alt="" />
      <div className="basketItem_details">
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
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>

        <select onChange={changeCountInBasket} id={selectId}>
          <option value="0">0 (Remove)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}

export default BasketItem;

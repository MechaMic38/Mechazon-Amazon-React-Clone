import "../CSS/Subtotal.css";
import React from "react";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context API/StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  /*=================================================
  Calculates total value of the items in basket*/
  const getBasketTotal = (basket) => {
    let total = basket.reduce(
      (total, currentItem) => (total += currentItem.price * currentItem.count),
      0
    );
    return Math.round(total * 100) / 100;
  };

  /*=================================================
  Calculates total items in basket*/
  const getTotalItems = () => {
    return basket.reduce(
      (total, currentItem) => (total += currentItem.count),
      0
    );
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({getTotalItems()} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              &nbsp;This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        disabled={getTotalItems() == 0}
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

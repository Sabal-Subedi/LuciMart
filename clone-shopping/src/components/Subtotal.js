import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import "../css/Subtotal.css";

const Subtotal = () => {
  const { basket, dispatch } = useContext(BasketContext);

  return (
    <div className="subtotal">
      <h3 className="subtotal__title">Total</h3>
      <span className="subtotal__item">Number of Items {basket.length}</span>
      <span className="subtotal__price">
        <span>Price</span>
        <small>$</small>
        <strong>
          {basket?.reduce((amount, item) => item.price + amount, 0)}
        </strong>
      </span>
      <Link to="/checkout">
        <button className="subtotal__proceed">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;

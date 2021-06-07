import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import "../css/BasketContainer.css";
import BasketProduct from "./BasketProduct";
import Subtotal from "./Subtotal";

const BasketContainer = () => {
  const { basket, dispatch } = useContext(BasketContext);
  return (
    <div className="basketcontainer">
      <div className="basketcontainer__left">
        <h2 className="basketcontainer__title">Your shopping Basket</h2>
        {basket.map((b) => (
          <BasketProduct
            id={b.id}
            price={b.price}
            rating={b.rating}
            title={b.title}
            image={b.image}
            itemid={b.itemid}
          />
        ))}
      </div>
      <div className="basketcontainer__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default BasketContainer;

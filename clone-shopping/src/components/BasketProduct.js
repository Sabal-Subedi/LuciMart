import "../css/BasketProduct.css";
import StarIcon from "@material-ui/icons/Star";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketProduct = ({ id, title, image, price, rating, itemid }) => {
  const { dispatch } = useContext(BasketContext);
  const removefrombasketHandler = () => {
    dispatch({
      type: "REMOVE FROM BASKET",
      itemid,
    });
  };

  return (
    <div className="basketproduct">
      <img
        className="product__image"
        src={image}
        alt=""
        height="200px"
        width="300px"
      />
      <div className="product__details">
        <p className="product__title">{title}</p>
        <p>
          <small>$</small>
          {price}
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <button
          onClick={removefrombasketHandler}
          className="basketproduct__icon"
        >
          <RemoveShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;

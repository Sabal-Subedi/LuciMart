import "../css/Product.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Product = ({ title, price, image, id, rating }) => {
  const { dispatch } = useContext(BasketContext);

  const basketHandler = (e) => {
    e.preventDefault();
    console.log("button pressed");
    dispatch({
      type: "ADD TO BASKET",
      basket: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <img
        className="product__image"
        src={image}
        alt=""
        height="250px"
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
        <button onClick={basketHandler} className="product__icon">
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default Product;

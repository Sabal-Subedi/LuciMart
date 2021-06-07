import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Navbar.css";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="navbar">
      <Link className="title__link" to="/">
        <h3 className="navbar__title">Clone</h3>
      </Link>
      <div className="search__bar">
        <input type="text" />
        <span className="search__icon">
          <SearchIcon />
        </span>
      </div>

      <div className="navbar__options">
        <div className="navbar__user">
          <span className="option1">Hello Guest</span>
          <span className="option2">Sign In</span>
        </div>
        <Link className="basket__link" to="/basketcontainer">
          <div className="navbar__basket">
            <span className="option1">{basket ? basket.length : 0}</span>
            <span className="option2">
              <ShoppingBasketIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

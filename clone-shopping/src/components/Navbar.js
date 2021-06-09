import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import "../css/Navbar.css";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase";

const Navbar = () => {
  const history = useHistory();
  const { basket } = useContext(BasketContext);
  const { user, dispatch } = useContext(UserContext);
  const authenticateHandler = () => {
    if (user) {
      auth.signOut();
      console.log("User signed out");
      dispatch({
        type: "REMOVE USER",
      });
      console.log("User removed ");
      console.log(user);
      history.push("/");
    }
  };

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
        <div onClick={authenticateHandler}>
          <Link className="user__link" to={!user && "/login"}>
            <div className="navbar__user">
              <span className="option1">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="option2">{user ? "Sign out" : "Sign In"}</span>
            </div>
          </Link>
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

import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import "../css/Checkout.css";
import MessageDiolag from "./MessageDiolag";

const Checkout = () => {
  const { basket } = useContext(BasketContext);

  var today = new Date(),
    odate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  console.log(odate);
  var today = new Date(),
    ddate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      (today.getDate() + 7);
  console.log(ddate);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("kathmandu");

  const confirmorderHandler = (e) => {
    e.preventDefault();
    //email
    //route
  };

  return (
    <div className="checkout">
      <form onSubmit={confirmorderHandler} className="checkout__form">
        <h2 className="form__title">User Details</h2>
        <input
          className="form__input"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          required
          maxLength={15}
          placeholder="Name"
        />

        <input
          className="form__input"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={contact}
          type="text"
          minLength={8}
          maxLength={10}
          required
          placeholder="98********"
        />

        <input
          className="form__input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          required
          placeholder="example@gmail.com"
        />

        <div className="form__location">
          <h2>Delivery location</h2>
          <select
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="select__location"
            value={location}
          >
            <option value="kathmandu" selected>
              kathmandu
            </option>
            <option value="bhaktapur">Bhaktapur</option>
            <option value="lalitpur">Lalitpur</option>
          </select>
          <input
            className="form__input"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            type="text"
            required
            placeholder="Address "
          />
        </div>
        <div className="form__date">
          <span className="order__date">
            Date of Order <strong>{odate}</strong>
          </span>
          <span className="delivery__date">
            Expected Date of Delivery <strong>{ddate}</strong>
          </span>
        </div>
        <div className="checkout__list">
          <h2 className="list__title">List of Items</h2>
          <ol className="item__title">
            <li>{basket.map((b) => b.title)}</li>
          </ol>
          <div className="list__price">
            <span className="item__price">
              Delivery Charge <small>$</small>
              <strong>60</strong>
            </span>
            <span className="item__price">
              Total price <small>$</small>
              <strong>
                {basket?.reduce((amount, item) => item.price + amount, 60)}
              </strong>
            </span>
          </div>
        </div>
        <input
          className="checkout__confirm"
          type="submit"
          value=" Confirm Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
